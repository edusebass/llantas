function Card({
    ancho,
    altura,
    rin,
    // marcaimg,
    precio,
    foto,
    labrado,
    marca
}: Llanta) {

    return (
        <article
            className="rounded-xl bg-white p-5 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 h-[450px] w-72"
        >
            <a href="#"
                className="flex flex-col h-full gap-4"
            >
                <div className="flex justify-center items-center overflow-hidden rounded-xl h-2/3">
                    <img
                        src={foto ?? "https://res.cloudinary.com/ds41xxspf/image/upload/v1696456721/Placeholder_view_vector.svg_r3qis6.png"}
                        className="object-cover object-center h-full"
                        draggable={false}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div >
                        <h2 className="text-slate-700 font-bold text-xl text-center">
                            {`${ancho ?? ''}/${altura ?? ''}R${rin ?? ''}  `}
                        </h2>
                        <h2 className="text-cyan-950 font-semibold text-base font-mono text-center">
                            {`${labrado} `}
                        </h2>
                    </div>
                    <h2 className="text-orange-500 font-bold text-base text-center">
                        {` ${marca ?? ""}`}
                    </h2>
                    {/* <img src={marcaimg} alt="logo marca"
                        className="h-8 object-cover object-center w-auto"
                    /> */}
                    <div className="flex items-center justify-between w-full xl:w-5/6">
                        <div>
                            <p className="text-xs font-bold text-red-500 line-through">
                                {`$${(precio + 12.99)}` }
                            </p>
                            <p className="text-lg font-bold text-blue-500">
                                {`$${precio?.toFixed(2)}` }
                            </p>
                        </div>

                        <div
                            className="flex items-center justify-between gap-2 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <a
                                href={`https://wa.me/+5930985661198?text=¡Saludos!,%20Me%20interesa%20la%20medida%20${ancho}/${altura}R${rin} ${labrado} ${marca}`}
                                target="_blank"
                            >
                                <button
                                    className="text-md uppercase font-bold"
                                >
                                    Cotizar
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    )
};

export default Card;