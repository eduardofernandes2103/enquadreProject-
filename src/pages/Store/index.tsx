import { useProducts } from '../../providers/products'
import { useCart } from '../../providers/cart'
import CardOfProduct from '../../components/CardOfProduct'
import { Container, CartPlace } from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
}

const Store = () =>{

    const { products } = useProducts();

    const { addToCart } = useCart();
    
    return (
        <div>
        
            <CartPlace>
                <Link to="/cart"><div className="icon"><FaShoppingCart /></div></Link>
            </CartPlace>

            <Container>
            
                <h2>Bem vindo!</h2>
                <h3>Deixe a Arte entrar na sua casa</h3>

                {products.map((product: Product)=>(
                                
                                <CardOfProduct 
                                    id={product.id} 
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    children="Comprar"
                                    click={ () => addToCart(product) }
                                />

                            ))}

            </Container>

        </div>
    )
}

export default Store