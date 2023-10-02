import React, { useEffect } from 'react';
import Card from './Card';
import useLlantasStore from '../store';


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
    const llantasToDisplay = useLlantasStore((state) => state.llantasToDisplay);
    const setLlantas = useLlantasStore((state) => state.setLlantas);
    const setFilteredLlantas = useLlantasStore((state) => state.setFilteredLlantas);

    useEffect(() => {
        fetch(json)
            .then((response) => response.json())
            .then((jsonData: { rines: Llanta[] }) => {
                setLlantas(jsonData.rines);
                setFilteredLlantas(jsonData.rines);
            })
            .catch((error) => {
                console.log('Error loading JSON data: ' + error.message);
            });
    }, [setLlantas]);

    return (
        <section className="bg-gray-100 flex">
            <div className="mx-auto w-full h-full grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
                { llantasToDisplay !== null ?
                    ( llantasToDisplay.length > 0 ?(
                        llantasToDisplay.map((llanta, index) => (
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
                        <div
                            className='flex flex-col items-center justify-center w-full'
                        >
                            <p
                                className='text-center w-full font-bold'
                            >
                                Por el momento no hay llantas con las medidas deseadas.
                            </p>
                            <p
                                className='text-center w-full italic'
                            >
                                Sugerencia: Verifica que las medidas esten correctamente escritas.
                            </p>
                        </div>
                    )
                    ) : (
                        <p>
                            Cargando...
                        </p>
                    )}
            </div>
        </section>
    );
};

export default Products;
