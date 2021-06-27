import { useCart } from '../../providers/cart'
import CardOfProduct from '../../components/CardOfProduct'
import { Container } from './styles'
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

            <button>Pagar</button>

            <Link to="/store">Voltar às compras</Link>

            <h3> Esse é o seu carrinho de Compras</h3>

            
            {cart.map((product: Product)=>(
                                
                                <CardOfProduct 
                                    id={product.id} 
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    children="Remover"
                                />

                            ))}
        </Container>
    )
}

export default Cart