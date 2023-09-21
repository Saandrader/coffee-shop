import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./Product";
import SignUp from "./signup/SignUp";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </>
  );
}

export default App;
