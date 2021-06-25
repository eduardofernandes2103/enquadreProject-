import { Link } from 'react-router-dom'

const Home = () =>{
    return (
                <div>
                    
                    <div className="placeHome">
                        <h1>Enquadre</h1>
                        <h2>Transformando sua casa em Arte</h2>
                    </div>

                    <div className="buttonPlace">
                        <button>Login</button>
                        <button>Signup</button>
                    </div>

                    <div className="redirectPlace">
                        <Link to='/store'> Ir direto Às Compras</Link>
                    </div>
                </div>
    )
}

export default Home