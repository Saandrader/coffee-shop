import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./product";
import SignUp from "./sign/SignUp";
import Navbar from "./components/Navbar";
import SignIn from "./sign/SignIn";
import Dashboard from "./dashboard/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
