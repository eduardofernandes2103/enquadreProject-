import { useCart } from '../../providers/cart'
import CardOfProduct from '../../components/CardOfProduct'
import { Container, HeaderCart, ShoppingCart, TextPlace } from './styles'
import { Redirect, Link} from 'react-router-dom';

interface Product {
    id?: number;
    image?: string;
    title?: string;
    description?: string;
    price?: any;
}

const Cart = () =>{

    const { cart, deleteToCart } = useCart()

    const subtotal= cart.reduce((product, acc) => acc.price + product, 0)


    return (
        <Container>

            <HeaderCart>  

                <button>Pagar</button>

                <Link to="/store">Voltar às compras</Link>

            </HeaderCart>

            <TextPlace>

                <h3> Esse é o seu carrinho de Compras</h3>

                <p>Valor da compra: <b>R$ {subtotal}</b></p>

            </TextPlace>

            <ShoppingCart>
                {cart.map((product: Product)=>(
                                    
                                    <CardOfProduct 
                                        id={product.id} 
                                        title={product.title}
                                        image={product.image}
                                        price={product.price}
                                        children="Remover"
                                        click={() => deleteToCart(product)}
                                    />

                                ))}
            </ShoppingCart>
        </Container>
    )
}

export default Cart