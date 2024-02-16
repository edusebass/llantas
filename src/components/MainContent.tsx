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
                    <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509042009371-65fa830819f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGxhbnRhJTIwZmVycmFyaXxlbnwwfHwwfHx8MA%3D%3D)' }}>
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div className="px-10 max-w-xl">
                                <h2 className="text-2xl text-white font-semibold">Auto</h2>
                                <p className="mt-2 text-white">Descubre la mejor selección de llantas para tu automóvil. </p>
                                <button onClick={() => openWhatsAppChat("auto")} className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <span>Cotiza tu medida</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
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
                        <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"  style={{ backgroundImage: 'url(https://media.chevroletarabia.com/dld/content/Pages/news/co/es/2011/Aug/0810_camiones/_jcr_content/rightpar/sectioncontainer_1/par/download/file.res/Chevrolet%20SERIE%20F%20FONDO.jpg)' }} >
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
                    {/* <div className="mt-16">
                        <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="flex items-end justify-end h-56 w-full bg-cover" >
                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">Chanel</h3>
                                    <span className="text-gray-500 mt-2">$12</span>
                                </div>
                            </div>
                            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="flex items-end justify-end h-56 w-full bg-cover" >
                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">Man Mix</h3>
                                    <span className="text-gray-500 mt-2">$12</span>
                                </div>
                            </div>
                            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="flex items-end justify-end h-56 w-full bg-cover" >
                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">classNameic watch</h3>
                                    <span className="text-gray-500 mt-2">$12</span>
                                </div>
                            </div>
                            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="flex items-end justify-end h-56 w-full bg-cover" >
                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">woman mix</h3>
                                    <span className="text-gray-500 mt-2">$12</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="flex items-end justify-end h-56 w-full bg-cover" >
                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">Chanel</h3>
                                    <span className="text-gray-500 mt-2">$12</span>
                                </div>
                            </div>
                            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="flex items-end justify-end h-56 w-full bg-cover">
                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">Man Mix</h3>
                                    <span className="text-gray-500 mt-2">$12</span>
                                </div>
                            </div>
                            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="flex items-end justify-end h-56 w-full bg-cover" >
                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">classNameic watch</h3>
                                    <span className="text-gray-500 mt-2">$12</span>
                                </div>
                            </div>
                            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="flex items-end justify-end h-56 w-full bg-cover" >
                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">woman mix</h3>
                                    <span className="text-gray-500 mt-2">$12</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </main>
        </>
    )
}

export default MainContent