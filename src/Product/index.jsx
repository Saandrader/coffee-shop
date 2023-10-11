import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "./ProductDetail";
import { useEffect } from "react";

function ProductDetail() {
    useEffect(() => {
        // Realizar scroll al componente deseado
        window.scrollTo(0, 0);
      }, []);
    return ( 
        <>
        {/* <Navbar/> */}
        <Product/>
        <Footer/>
        </>
     );
}

export default ProductDetail;