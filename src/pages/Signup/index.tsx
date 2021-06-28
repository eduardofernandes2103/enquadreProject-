import { useHistory, Link} from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import { Container } from './styles'

interface SignupProps{
    username: string;
    email: string;
    confirmEmail?: string;
    password: string;
    passwordConfirm?: string;
}

const Signup = () =>{

    const formSchema = yup.object().shape({
        
        username: yup
            .string()
            .required("Usuário é obrigatório"),
        email: yup
            .string()
            .email("E-mail invalido")
            .required("E-mail é obrigatório"),
        confirmEmail: yup
            .string()
            .oneOf([yup.ref("email")], "E-mail não é o mesmo")
            .email("E-mail inválido")
            .required("Confirmação E-mail é obrigatório"),            
        password: yup
            .string()
            .min(6)
            .required("Senha obrigatória"),
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref("password")], "A senha não é a mesma")
            .required("Confirmação da senha é obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignupProps>({
        resolver: yupResolver(formSchema)
    });

    const history = useHistory();

    const onSubFunction = ({username, email, password}: SignupProps) => {
        const user = {username, email, password};
        console.log("teste")
        api
        .post("/users/", user)
        .then((_) => {
            alert(`Obrigado por cadastrar-se!`)
            return history.push('/login')
        })
        .catch((_)=> alert("Algo não está certo, tente novamente!"))
    }
    
    return (
        <Container>
            <div>
                <h2>SignUp</h2>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubFunction)}>

                    <div className="inputPlace">

                        <input 
                                placeholder="Defina um nome de Usuário" 
                                {...register("username")}
                                name="username"
                        />
                        <span>{errors.username?.message}</span>

                        <input 
                                placeholder="Escolha o seu melhor e-mail" 
                                {...register("email")}  
                                name="email"  
                        />
                        <span>{errors.email?.message}</span>

                        <input 
                                placeholder="Confirme o e-mail" 
                                {...register("confirmEmail")}  
                                name="confirmEmail"
                        />
                        <span>{errors.confirmEmail?.message}</span>

                        <input 
                                placeholder="Insira uma senha" 
                                type="password"
                                {...register("password")}  
                                name="password" 
                        />
                        <span>{errors.password?.message}</span>

                        <input 
                                placeholder="Confirme a senha" 
                                type="password" 
                                {...register("passwordConfirm")} 
                                name="passwordConfirm"
                        />
                        <span>{errors.passwordConfirm?.message}</span>

                    </div>      

                    <div>
                        <button type="submit" >Enviar</button>
                    </div>
                    
                </form>
            </div>

            <div>
                <p>Já me cadastrei! </p><Link to='/login'>Login </Link>
            </div>
        </Container>
    )
}

export default Signup