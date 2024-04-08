import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const phoneNumber = "+5930985661198";
    const message = "Your message goes here"; // Replace this with your actual message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola, estoy interesado en una llanta para un ${encodeURIComponent(message)}`;

    const openWhatsappLink = () => {
    window.open(whatsappLink, '_blank');
    };
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
                        <div className="flex items-center gap-1 hover:cursor-pointer hover:text-zinc-700">
                            <IoMdCall />
                            <p>0985661198</p>
                        </div>
                        <div className="flex items-center gap-1 hover:cursor-pointer hover:text-zinc-700" onClick={openWhatsappLink}>
                                <MdEmail />
                                <p>acinomroma@hotmail.com</p>
                        </div>
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
