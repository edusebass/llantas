const Footer = () => {
    return (
        <>
            <footer className="bg-gray-200">
                <div className="container mx-auto px-6 py-3  flex justify-between">
                    <div>
                        <p className="text-amber-900 text-xl font-bold">Distribuidores de llantas</p>
                        <p className="font-medium">Contamos con todas las llantas y medidas</p>
                        <p className="text-amber-900 text-xl font-bold">Ofrecemos calidad y servicios</p>
                    </div>
                    <div>
                        <p>0985661198</p>
                        <p>acinomroma@hotmail.com</p>
                    </div>
                </div>
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <a href="#" className=" text-gray-500 hover:text-gray-400">Llantera Quitumbe</a>
                    <p className="py-2 text-gray-500 sm:py-0">{new Date().getFullYear()} All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
