import { Link } from 'react-router-dom'
import { Container, PlaceHome, ButtonPlace } from './styles'
import { useHistory } from 'react-router'

const Home = () =>{
    const history = useHistory();

    const handleRedirection = (path: string) => {
        return history.push(path)
    }


    return (
                <Container>
                    
                    <PlaceHome>
                        <h1>Enquadre</h1>
                        <h2>Transformando sua casa em Arte</h2>
                    </PlaceHome>

                    <ButtonPlace>
                        <button onClick={() => handleRedirection('/login')}>Login</button>
                        <button onClick={() => handleRedirection('/signup')}>Signup</button>
                    </ButtonPlace>

                    <div className="redirectPlace">
                        <Link to='/store'> Ir direto Às Compras</Link>
                    </div>
                </Container>
    )
}

export default Home