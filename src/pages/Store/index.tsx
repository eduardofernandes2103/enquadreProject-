import { useProducts } from '../../providers/products'
import CardOfProduct from '../../components/CardOfProduct'
import { Container } from './styles'

const Store = () =>{
    
    const {products} = useProducts();
    
    return (
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
    )
}

export default Store