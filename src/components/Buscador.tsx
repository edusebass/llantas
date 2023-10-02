import { useState, useEffect } from 'react';
import useLlantasStore from '../store';
import { filterLlantas } from '../utils/filter';
import SearchbarInput from './SearchbarInput';
import Button from './Button';

const initialValues = {
    ancho: '',
    altura: '',
    rin: '',
}

const Buscador: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState(initialValues);

    const llantas = useLlantasStore((state) => state.llantas);
    const setFilteredLlantas = useLlantasStore((state) => state.setFilteredLlantas);

    const clearFilters = () => setFormData(initialValues);

    const handleInputChange = (
        event: {
            target: { name: string; value: string }
        }
    ) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        const filteredData = filterLlantas(llantas, formData);
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
        <div className="bg-gray-100 py-8">
        {isMobile ? (
            // Muestra el buscador en celular
            <form className="bg-slate-50 rounded-lg shadow-lg py-6 gap-4 justify-center items-center pb-10">
                <div className="flex justify-center items-center text-xl">
                    <h2 className="font-bold capitalize text-2xl">
                        Busca por medida
                    </h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 mt-4">
                    <SearchbarInput
                        text='Ancho'
                        placeholder='185'
                        name='ancho'
                        onChange={handleInputChange}
                        value={formData.ancho}
                    />
                    <SearchbarInput
                        text='Altura'
                        placeholder='60'
                        name='altura'
                        onChange={handleInputChange}
                        value={formData.altura}
                    />
                    <SearchbarInput
                        text='Rin'
                        placeholder='14'
                        name='rin'
                        onChange={handleInputChange}
                        value={formData.rin}
                    />
                    <Button
                        text='Limpiar'
                        onClick={clearFilters}
                    />
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
                            <SearchbarInput
                                text='Ancho'
                                placeholder='185'
                                name='ancho'
                                onChange={handleInputChange}
                                value={formData.ancho}
                            />
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                            <SearchbarInput
                                text='Altura'
                                placeholder='60'
                                name='altura'
                                onChange={handleInputChange}
                                value={formData.altura}
                            />
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                            <SearchbarInput
                                text='Rin'
                                placeholder='14'
                                name='rin'
                                onChange={handleInputChange}
                                value={formData.rin}
                            />
                        </div>
                    </div>
                    <Button
                        text='Limpiar'
                        onClick={clearFilters}
                    />
                </form>
            </div>
        )}
        </div>
    );
};

export default Buscador;