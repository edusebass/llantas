import React, { useEffect } from 'react';
import Card from './Card';
import useLlantasStore from '../store';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

const Products: React.FC = () => {
    const llantasToDisplay = useLlantasStore((state) => state.llantasToDisplay);
    const setLlantas = useLlantasStore((state) => state.setLlantas);
    const setFilteredLlantas = useLlantasStore((state) => state.setFilteredLlantas);

    const fetchData = async () => {
        const collectionRef = collection(db, 'tires');

        try {
            const querySnapshot = await getDocs(collectionRef);
            const newData: any = querySnapshot.docs.map(doc => doc.data());
            setLlantas(newData);
            setFilteredLlantas(newData);
        } catch (error) {
            console.error('Error getting documents: ', error);
        }
    };

    useEffect(() => {

        fetchData();

    }, [setLlantas]);

    return (
        <section className="bg-gray-100 flex min-h-screen">
            <div
                className="mx-auto w-full h-full flex flex-wrap max-w-7xl gap-6 pt-4 pb-12 px-4 md:px-0 items-center justify-center"
            >
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
                            className='flex flex-col items-center justify-center w-full pt-16 gap-4'
                        >
                            <p
                                className='text-center w-full font-bold sm:text-2xl'
                            >
                                Por el momento no hay llantas con las medidas deseadas.
                            </p>
                            <p
                                className='text-center w-full italic sm:text-xl'
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
