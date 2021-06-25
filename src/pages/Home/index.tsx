import { Link } from 'react-router-dom'
import { Container, PlaceHome, ButtonPlace } from './styles'

const Home = () =>{
    return (
                <Container>
                    
                    <PlaceHome>
                        <h1>Enquadre</h1>
                        <h2>Transformando sua casa em Arte</h2>
                    </PlaceHome>

                    <ButtonPlace>
                        <button>Login</button>
                        <button>Signup</button>
                    </ButtonPlace>

                    <div className="redirectPlace">
                        <Link to='/store'> Ir direto Às Compras</Link>
                    </div>
                </Container>
    )
}

export default Home