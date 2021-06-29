import { createContext, SetStateAction, useContext, ReactNode, Dispatch, useEffect, useState } from "react";
import {toast}  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CartContext = createContext<CartProviderData>({} as CartProviderData);

interface CartProviderProps {
    children: ReactNode;
}

interface Products {
    id?: number;
    image?: string;
    title?: string;
    description?: string;
    price?: any;
}

interface CartProviderData{
    addToCart: (products: Products) => void;
    deleteToCart: (productsDel: Products) => void;
    cart: Products[];
    setCart: Dispatch<SetStateAction<Products[]>>;
}

export const CartProvider = ({ children, }: CartProviderProps) => {

  const [cart, setCart] = useState<Products[]>([] as Products[]);

  const addToCart = (products: Products) => {
    setCart([...cart, products])
    toast.success("Item adicionado ao carrinho")
  }

  const deleteToCart = (productsDel: Products) => {
    const newList = cart.filter(
      (products) => products.id !== productsDel.id
    );
    setCart(newList)
    toast.error('Item removido do Carrinho')
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ addToCart, deleteToCart, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
