import { useState, useEffect } from 'react';
// import Slash from '../../public/slash.svg';
// import LetterR from '../../public/letter-r.svg';

const buscador = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 740); // Cambia 640 al ancho que consideres como "tamaño de celular"
        };

        // Agrega un evento de escucha para detectar cambios de tamaño de pantalla
        window.addEventListener('resize', handleResize);

        // Llama a handleResize cuando se carga el componente
        handleResize();

        // Limpia el evento de escucha al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-gray-100 py-5">
        {isMobile ? (
            // Muestra el buscador en celular
            
            <form className="bg-slate-50 mx-4 rounded-lg shadow-lg">
                <div className="flex justify-center text-xl ">
                    <h2 className="pt-4">Busca por medida</h2>
                </div>
                <div className="flex flex-col justify-center py-5">
                    <h2 className='mx-5 mt-1'>Ancho</h2>
                    <input type="search" id="search" className=" mx-5 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="185" required />
                    <h2 className='mx-5 mt-1'>Altura</h2>
                    <input type="search" id="search" className=" mx-5 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="60" required />
                    <h2 className='mx-5 mt-1'>Rin</h2>
                    <input type="search" id="search" className=" mx-5 p-4 pl-10 pr-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="14" required />
                    <button type="submit" className="mt-3 mx-24 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  ">Buscar</button>
                </div> 
            </form>
        
            
        ) : (
            // Muestra el buscador en en pantallas
            <div className='flex flex-col justify-center'>
                <form className="flex bg-slate-50 mx-40 rounded-lg shadow-lg">
                    <div className="mt-5 ml-5 mr-5 text-xl ">
                        <h2 className="pt-4">Busca por medida</h2>
                    </div> 
                    <div className="flex flex-wrap items-center">
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                            <div className="flex flex-col justify-center">
                            <h2>Ancho</h2>
                            <input
                                type="search"
                                id="search"
                                className="p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                placeholder="175"
                                required
                            />
                            </div>
                        </div>
                            
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                            <div className="flex flex-col justify-center">
                                <h2>Altura</h2>
                                <input
                                    type="search"
                                    id="search"
                                    className="p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="70"
                                    required
                                />
                            </div>
                        </div>
                            
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                            <div className="flex flex-col justify-center">
                            <h2>Rin</h2>
                            <input
                                type="search"
                                id="search"
                                className="p-4 pl-10 pr-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                placeholder="13"
                                required
                            />
                            </div>
                        </div>
                        
                        <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-3 my-8 mt-16 px-8 py-2"
                        >
                        Buscar
                        </button>
                        
                    </div>

                </form>
            </div>
        )}
        </div>
    );
};

export default buscador;