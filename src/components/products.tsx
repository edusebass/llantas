import React, { useState, useEffect } from 'react';
import Card from './Card';

interface Llanta {
    ancho: number;
    altura: number;
    rin: number;
    marcaimg: string;
    precio: number;
    foto: string;
}

const json = "../../llantas.json";

const Products: React.FC = () => {
    const [data, setData] = useState<Llanta[] | null>(null);

    useEffect(() => {
        fetch(json)
            .then((response) => response.json())
            .then((jsonData: { rines: Llanta[] }) => {
                setData(jsonData.rines);
            })
            .catch((error) => {
                console.error('Error loading JSON data:', error);
            });
    }, []);

    return (
        <section className="bg-gray-100 flex">
            <div className="mx-auto w-full h-full grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data !== null ? (
                    data.map((llanta, index) => (
                        <Card
                            key={index}
                            ancho={llanta.ancho}
                            altura={llanta.altura}
                            rin={llanta.rin}
                            marcaimg={llanta.marcaimg}
                            precio={llanta.precio}
                            foto={llanta.foto}
                        />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
};

export default Products;
