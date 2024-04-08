import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"

const Layout = ({children}:any) => {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}

export default Layout