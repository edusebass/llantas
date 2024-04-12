const MainContent = () => {

    const openWhatsAppChat = (messagePage: string) => {        
        const phoneNumber = '+5930985661198'; // Reemplaza con tu número de teléfono
        const message = messagePage

        const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola, estoy interasado en una llanta para un ${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <>
            <main className="my-8">
                <div className="container mx-auto px-6">
                    <div className="md:flex mt-8 md:-mx-4">
                        <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509042009371-65fa830819f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGxhbnRhJTIwZmVycmFyaXxlbnwwfHwwfHx8MA%3D%3D)' }}>
                            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                <div className="px-10 max-w-xl">
                                    <h2 className="text-2xl text-white font-semibold">Auto</h2>
                                    <p className="mt-2 text-white">Descubre la mejor selección de llantas para tu automóvil.</p>
                                    <button onClick={() => openWhatsAppChat("auto")} className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                        <span>Cotiza tu medida</span>
                                        <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"  style={{ backgroundImage: 'url(https://www.ambacar.ec/wp-content/uploads/2023/11/camioneta-ambacar-kyc-f3-diseno-desempeno-3.jpg)' }} >
                            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                <div className="px-10 max-w-xl">
                                    <h2 className="text-2xl text-white font-semibold">Camioneta</h2>
                                    <p className="mt-2 text-white">Descubre la mejor selección de llantas para tu Camioneta </p>
                                    <button onClick={() => openWhatsAppChat("CAMIONETA")} className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                        <span>Cotiza tu medida</span>
                                        <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex mt-8 md:-mx-4">
                        <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{ backgroundImage: 'url(https://www.motortrend.com/uploads/2021/10/2022-Genesis-GV70-3-5T-AWD-38.jpg?fit=around%7C784:441)' }}>
                            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                <div className="px-10 max-w-xl">
                                    <h2 className="text-2xl text-white font-semibold">Suv</h2>
                                    <p className="mt-2 text-white">Descubre la mejor selección de llantas para tu SUV </p>
                                    <button onClick={() => openWhatsAppChat("auto SUV")} className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                        <span>Cotiza tu medida</span>
                                        <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{ backgroundImage: 'url(https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/03/fiat-ulysse-2635503.jpg?tf=3840x)' }}>
                            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                <div className="px-10 max-w-xl">
                                    <h2 className="text-2xl text-white font-semibold">Furgoneta</h2>
                                    <p className="mt-2 text-white">Descubre la mejor selección de llantas para su furgoneta </p>
                                    <button onClick={() => openWhatsAppChat("furgoneta")} className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                        <span>Cotiza tu medida</span>
                                        <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"  style={{ backgroundImage: 'url(https://www.interperu.pe/blog/wp-content/uploads/2019/06/international-camiones-primer-segundo-mantenimiento-camion.jpg)' }} >
                            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                <div className="px-10 max-w-xl">
                                    <h2 className="text-2xl text-white font-semibold">Camion</h2>
                                    <p className="mt-2 text-white">Descubre la mejor selección de llantas para tu Camion </p>
                                    <button onClick={() => openWhatsAppChat("CAMION")} className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                        <span>Cotiza tu medida</span>
                                        <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
        </>
    )
}

export default MainContent