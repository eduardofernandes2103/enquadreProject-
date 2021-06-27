import { useCart } from '../../providers/cart'
import CardOfProduct from '../../components/CardOfProduct'
import { Container, HeaderCart, ShoppingCart } from './styles'
import { Redirect, Link} from 'react-router-dom';

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
        <Container>

            <HeaderCart>  

                <button>Pagar</button>

                <Link to="/store">Voltar às compras</Link>

            </HeaderCart>

            <h3> Esse é o seu carrinho de Compras</h3>

            <p>R$ 0.00</p>

            <ShoppingCart>
                {cart.map((product: Product)=>(
                                    
                                    <CardOfProduct 
                                        id={product.id} 
                                        title={product.title}
                                        image={product.image}
                                        price={product.price}
                                        children="Remover"
                                    />

                                ))}
            </ShoppingCart>
        </Container>
    )
}

export default Cart