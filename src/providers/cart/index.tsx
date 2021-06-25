import { createContext, SetStateAction, useContext, ReactNode, Dispatch, useEffect, useState } from "react";

const CartContext = createContext<CartProviderData>({} as CartProviderData);

interface CartProviderProps {
    children: ReactNode;
}

interface Products {
    id?: number;
    image: string;
    title: string;
    description: string;
    price: number;
}

interface CartProviderData{
    cart: Products[];
    setCart: Dispatch<SetStateAction<Products[]>>;
}

export const CartProvider = ({ children, }: CartProviderProps) => {
  const [cart, setCart] = useState<Products[]>([] as Products[]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
