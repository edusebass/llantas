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
    const [ancho, setAncho] = useState<number | null>(null);
    const [alto, setAlto] = useState<number | null>(null);
    const [rin, setRin] = useState<number | null>(null);

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

    // Function to fetch specific products
    const fetchProductosEspecificos = async () => {
        const data = { alto, ancho, rin };
        try {
            const response = await fetch("https://tecniservicios-backend.vercel.app/api/productos-especifico", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                // Update state with the fetched data
                setProductos(responseData);
            } else {
                // Handle error if response is not OK
                console.error("Failed to fetch specific products:", response.status);
            }
        } catch (error) {
            // Handle any other errors
            console.error("Error fetching specific products:", error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchProductos();
    }, []);

    return (
        <>
            <section className="bg-gray-100 flex min-h-screen flex-col">
                <div className="flex items-center justify-center ml-4 lg:ml-0 ">
                    <p className="font-bungee w-auto text-4xl my-5">PROMOCIONES DE ESTE MES</p>
                </div>
                <div className="relative flex justify-center m-4 p-6 ">
                    <div className="flex flex-col justify-start lg:flex-row lg:justify-center gap-6">
                        <div>
                            <p>Busca si tu medida se encuentra en promocion</p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <input
                                type="search"
                                className="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                                placeholder="Ancho"
                                value={ancho || ''}
                                onChange={(e) => setAncho(Number(e.target.value))}
                            />
                            <input
                                type="search"
                                className="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                                placeholder="Alto"
                                value={alto || ''}
                                onChange={(e) => setAlto(Number(e.target.value))}
                            />
                            <input
                                type="search"
                                className="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                                placeholder="Rin"
                                value={rin || ''}
                                onChange={(e) => setRin(Number(e.target.value))}
                            />
                            <button
                                className="z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                                type="button"
                                id="button-addon3"
                                onClick={() => fetchProductosEspecificos()}
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-full h-full flex flex-wrap max-w-7xl gap-6 pt-4 pb-5 px-4 md:px-0 items-center justify-center">
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
