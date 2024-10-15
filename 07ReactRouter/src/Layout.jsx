import Header from "./components/Header/header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
 function Layout(){
             return(
                <>
                <Header/>
                <Outlet/>
                <Footer/>
                </>
             )
}
export default Layout