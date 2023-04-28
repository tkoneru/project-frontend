import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from "@/styles/Home.module.css";


const Layout = ({children}) => {

    return (
        <>
         <NavBar />
         {children}
         <Footer />
        </>
    )
}

export default Layout;