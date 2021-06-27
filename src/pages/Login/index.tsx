import { useAuth } from '../../providers/auth'
import { Redirect, useHistory, Link} from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import { Container } from './styles'
import { useState } from 'react'

interface LoginProps{
    username: string;
    password: string;
}

interface AuthType{
    authenticated: boolean;
    setAuthenticated: boolean;
}

const Login = () =>{

    // const authenticated = useAuth()
    const history = useHistory();


    const formSchema = yup.object().shape({
        
        username: yup
            .string()
            .required("Usuário é obrigatório"),         
        password: yup
            .string()
            .min(6)
            .required("Senha obrigatória"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginProps>({
        resolver: yupResolver(formSchema)
    });

    const TokenLocalStorage = (data: LoginProps) => {
        localStorage.setItem('@kenzieShop/token', JSON.stringify(data));
    }

    const onSubFunction = ({username, password}: LoginProps) => {
        const user = {username, password};
        api
        .post("/sessions/", user)
        .then((response) => {
            TokenLocalStorage(response.data.access)
            alert(`Bem vindo ${username}!`)
        
            return history.push('/store')
        })
        .catch((_)=> alert("Something went wrong, try again!"))
    };

    // if(authenticated) {
    //                     return <Redirect to="/store"/>
    // }

    return (
        <Container>
            <h2>Login</h2>

            <div>
                <form onSubmit={handleSubmit(onSubFunction)}>

                    <div className="inputPlace">

                        <input 
                                placeholder="Insira o nome de Usuário" 
                                {...register("username")}
                                name="username"
                        />
                        <span>{errors.username?.message}</span>

                        <input 
                                placeholder="Insira uma senha" 
                                type="password"
                                {...register("password")}  
                                name="password" 
                        />
                        <span>{errors.password?.message}</span>

                    </div>

                    <div>
                        <button type="submit" >Entrar</button>
                    </div> 

                </form>
            </div>

            <div>
                <Link to='/store'> Ir direto Às Compras</Link>
            </div>

            <div>
                <p>Ainda não me cadastrei! </p><Link to='/signup'>Sign Up </Link>
            </div>
            
        </Container>
    )
}

export default Login