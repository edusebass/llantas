import { useState, useEffect } from 'react';
import useLlantasStore from '../store';

const Buscador = () => {
    const [isMobile, setIsMobile] = useState(false);
    const llantas = useLlantasStore((state) => state.llantas);
    const setFilteredLlantas = useLlantasStore((state) => state.setFilteredLlantas);

    const [formData, setFormData] = useState({
        ancho: '',
        altura: '',
        rin: ''
    });

    const clearFilters = () => {
        setFormData({
            ancho: '',
            altura: '',
            rin: '',
        });
    };

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const filterLlantas = (llantas: any[] | null, filterData: { ancho: any; altura: any; rin: any; }) => {
        if (!llantas) {
            return [];
        }

        return llantas.filter((llanta: { ancho: number; altura: number; rin: number; }) => {

            const anchoMatch =
                filterData.ancho === '' ?
                    true : llanta.ancho === +filterData.ancho;

            const alturaMatch =
                filterData.altura === '' ?
                    true : llanta.altura === +filterData.altura;

            const rinMatch =
                filterData.rin === '' ?
                    true : llanta.rin === +filterData.rin;

            return anchoMatch && alturaMatch && rinMatch;

        });
    };

    useEffect(() => {

        const filteredData = filterLlantas(llantas, formData);
        // Set the filtered llantas using the setFilteredLlantas function
        setFilteredLlantas(filteredData);
    }, [formData, setFilteredLlantas]);

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
            <form className="bg-slate-50 rounded-lg shadow-lg py-6 gap-4 justify-center items-center pb-10">
                <div className="flex justify-center items-center text-xl">
                    <h2 className="font-bold capitalize text-2xl">Busca por medida</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className='mt-4'>Ancho</h2>
                    <input
                        type="number"
                        id="search"
                        name='ancho'
                        className="py-2 px-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                        placeholder="185"
                        onChange={handleInputChange}
                        value={formData.ancho}
                    />
                    <h2 className='mx-5 mt-1'>Altura</h2>
                    <input
                        type="number"
                        id="search"
                        name='altura'
                        className="py-2 px-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                        placeholder="60"
                        onChange={handleInputChange}
                        value={formData.altura}
                    />
                    <h2 className='mx-5 mt-1'>Rin</h2>
                    <input
                        type="number"
                        id="search"
                        name='rin'
                        className="py-2 px-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                        placeholder="14"
                        onChange={handleInputChange}
                        value={formData.rin}
                    />
                    <button
                        type='button'
                        onClick={clearFilters}
                        className="mx-auto w-2/3 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-6"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        ) : (
            // Muestra el buscador en en pantallas
            <div className='flex flex-col justify-center items-center'>
                <form className="flex flex-col p-6 pb-10 bg-slate-50 mx-40 rounded-lg shadow-lg items-center justify-center">
                    <div className="text-2xl font-bold capitalize items-center justify-center">
                        <h2 className="">
                            Busca por medida
                        </h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                            <div className="flex flex-col justify-center gap-2">
                                <h2>Ancho</h2>
                                <input
                                type="search"
                                id="searchAncho"
                                name="ancho"
                                className="py-2 px-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                placeholder="185"
                                value={formData.ancho}
                                onChange={handleInputChange}
                                required
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                            <div className="flex flex-col justify-center gap-2">
                                <h2>Altura</h2>
                                <input
                                    type="search"
                                    id="searchAltura"
                                    name="altura"
                                    className="py-2 px-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="60"
                                    value={formData.altura}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                            <div className="flex flex-col justify-center gap-2">
                                <h2>Rin</h2>
                                <input
                                    type="search"
                                    id="searchRin"
                                    name="rin"
                                    className="py-2 px-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="14"
                                    value={formData.rin}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type='button'
                        onClick={clearFilters}
                        className="mx-auto w-2/3 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-6"
                    >
                        Limpiar
                    </button>
                </form>
            </div>
        )}
        </div>
    );
};

export default Buscador;