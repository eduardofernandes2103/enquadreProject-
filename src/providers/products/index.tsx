import { createContext, useState, useContext, ReactNode } from 'react';
import Django from '../../assets/django.jpg'
import PulpFiction from '../../assets/PulpFiction.jpg'
import ClockWorkOrange from '../../assets/aClockWorkOrange.jpg'
import GodFather from '../../assets/theGodfather.jpg'
import Shining from '../../assets/theShining.jpg'

interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
}

interface ProductProviderProps {
    children: ReactNode;
}

interface ProductProviderData {
    products: Product[];
 
}

export const ProductsContext = createContext<ProductProviderData>({} as ProductProviderData);

export const ProductsProvider = ({children} : ProductProviderProps) => {

   
    const [products] = useState<Product[]>([
        { id: 1, image: Django , title: "Django", price: 20.59},
        { id: 2, image: PulpFiction , title: "Pulp Fiction", price: 20.59},
        { id: 3, image: ClockWorkOrange , title: "Laranja Mecânica", price: 20.59},
        { id: 4, image: GodFather , title: "O Poderoso Chefão", price: 20.59},
        { id: 5, image: Shining , title: "O Iluminado", price: 20.59},
    ])
  

    return(
        <ProductsContext.Provider
            value={{products}}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts= () => useContext(ProductsContext);