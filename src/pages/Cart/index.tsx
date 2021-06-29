import { useCart } from '../../providers/cart'
import { useAuth } from '../../providers/auth'
import CardOfProduct from '../../components/CardOfProduct'
import { Container, HeaderCart, ShoppingCart, TextPlace, LogoutPlace } from './styles'
import { Redirect, Link, useHistory} from 'react-router-dom';
import {ToastContainer}  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


interface Product {
    id?: number;
    image?: string;
    title?: string;
    description?: string;
    price?: any;
}

const Cart = () =>{

    const { cart, deleteToCart } = useCart()

    const { autorization, setAutorization } = useAuth()

    const subtotal= cart.reduce((product, acc) => acc.price + product, 0)

    const history = useHistory()

    const handleLogout = () => {
        setAutorization(false)
        localStorage.clear()
        return history.push('/')
    }

    if(!autorization) {
                        return <Redirect to="/login"/>
    }

    return (
        <Container>

            <ToastContainer />

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

            <LogoutPlace>
                <button onClick={ () => handleLogout() }>Logout</button>
            </LogoutPlace>

        </Container>
    )
}

export default Cart