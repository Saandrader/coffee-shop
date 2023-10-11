import { createContext, useState, useContext, useReducer } from "react";
import Cart from "../cart/Cart";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [isOpen, setOpen] = useState(false);
  const toggleCart = (value) => setOpen(value);

  return (
    <CartContext.Provider value={{ cart, dispatch, toggleCart }}>
      <Cart isOpen={isOpen} />
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
