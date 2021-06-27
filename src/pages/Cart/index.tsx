import { useCart } from '../../providers/cart'
import CardOfProduct from '../../components/CardOfProduct'

interface Product {
    id?: number;
    image?: string;
    title?: string;
    description?: string;
    price?: number;
}

const Cart = () =>{

    const { cart } = useCart()


    return (
        <div>
            {cart.map((product: Product)=>(
                                
                                <CardOfProduct 
                                    id={product.id} 
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    children="Remover"
                                />

                            ))}
        </div>
    )
}

export default Cart