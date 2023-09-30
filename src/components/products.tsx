import { useState, useEffect } from 'react'
import Card from './Card';

const json = "llantas.json";

const products = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        // Use the fetch API to load the JSON data
        fetch(json)
            .then((response) => response.json())
            .then((jsonData) => {
                // Set the JSON data to your component state
                setData(jsonData.rines);
            })
            .catch((error) => {
                console.error('Error loading JSON data:', error);
            });

    }, []);

    console.log(data);

    return (
        <section className=" bg-gray-100 flex">
            <div
                className="mx-auto w-full h-full grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
                {
                    data !== null ?
                    data.map((llanta: any) => {
                        <Card
                            ancho={llanta.ancho}
                            altura={llanta.altura}
                            rin={llanta.rin}
                            marcaimg={llanta.marcaimg}
                            precio={llanta.precio}
                            foto={llanta.foto}
                        />
                    })
                    : <p>Loading...</p>
                }
            </div>
        </section>
    );
};

export default products;