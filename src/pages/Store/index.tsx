import { useProducts } from '../../providers/products'
import CardOfProduct from '../../components/CardOfProduct'
import { Container, CartPlace } from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Store = () =>{

    const {products} = useProducts();
    
    return (
        <div>
        
            <CartPlace>
                <Link to="/cart"><div className="icon"><FaShoppingCart /></div></Link>
            </CartPlace>

            <Container>
            
                <h2>Bem vindo!</h2>
                <h3>Deixe a Arte entrar na sua casa</h3>

                {products.map((product)=>(
                                
                                <CardOfProduct 
                                    id={product.id} 
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    children="Comprar"
                                />

                            ))}

            </Container>

        </div>
    )
}

export default Store