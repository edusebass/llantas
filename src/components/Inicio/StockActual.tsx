import { useEffect, useState } from "react";
import Card from "../Card";

interface Producto {
    _id: string;
    marca: string;
    labrado: string;
    caracteristicas: string;
    alto: number;
    ancho: number;
    rin: number;
    costo: number;
    linkimg: string;
    pvp: number
}

export default function StockActual() {
    // State to store the fetched data
    const [productos, setProductos] = useState<Producto[]>([]);

    // Function to fetch data from the API
    const fetchProductos = async () => {
        try {
            const response = await fetch("https://tecniservicios-backend.vercel.app/api/productos");
            if (response.ok) {
                const data = await response.json();
                // Update state with fetched data
                setProductos(data);
            } else {
                // Handle error if response is not OK
                console.error("Failed to fetch data:", response.status);
            }
        } catch (error) {
            // Handle any other errors
            console.error("Error fetching data:", error);
        }
    };

    console.log(productos)

    // Fetch data when the component mounts
    useEffect(() => {
        fetchProductos();
    }, []);

    return (  
        <>
        <section className="bg-gray-100 flex min-h-screen flex-col">
            <div className="flex items-center justify-center ml-4 lg:ml-0 ">
                <p className="font-bungee w-auto text-4xl my-5" >PROMOCIONES DE ESTE MES</p> 
            </div>
            <div
                className="mx-auto w-full h-full flex flex-wrap max-w-7xl gap-6 pt-4 pb-5 px-4 md:px-0 items-center justify-center"
            >

            {/* Render a Card component for each product */}
            {productos.map(producto => (
                <Card
                key={producto._id}
                altura={producto.alto}
                ancho={producto.ancho}
                rin={producto.rin}
                precio={producto?.pvp}
                marca={producto.marca}
                labrado={producto.labrado}
                foto={producto?.linkimg}
                // Add other properties as needed
                />
                ))}
            </div>
        </section>
        </>
    );
}
