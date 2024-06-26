import { FloatButton } from "antd"
import MainContent from "../components/Inicio/MainContent"
import StockActual from "../components/Inicio/StockActual"
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Inicio = () => {
    const openWhatsAppChat = () => {        
        const phoneNumber = '+5930985661198'; // Reemplaza con tu número de teléfono

        const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola, estoy interasado en una llanta para un COTIZAR`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <>
            <div className="bg-white">
                <MainContent/>
                <StockActual />
                <FloatButton.Group>
                    <FloatButton
                        shape="circle"
                        style={{color: "green"}}
                        className="bg-green-500"
                        // style={{ right: "94px", backgroundColor: "green" }}
                        icon={<FaWhatsapp className="text-green-500 hover:text-white"/>}
                        onClick={() => openWhatsAppChat}
                        badge={{ count: 5, color: 'green' }}
                        href="https://wa.me/+5930985661198?text=Hola, estoy interasado en una llanta para un COTIZAR"
                        target="_blank"
                    />  
                    <FloatButton
                        shape="circle"
                        style={{color: "blue"}}
                        // style={{ right: "94px", backgroundColor: "green" }}
                        icon={<SiGooglemaps className="text-blue-700"/>}
                        onClick={() => openWhatsAppChat}
                        badge={{count:1, color: 'blue' }}
                        href="https://maps.app.goo.gl/CxcDzHjpktiSGsAa9"
                        target="_blank"
                    />  
                </FloatButton.Group>
                
            </div>
        </>
    )
}

export default Inicio