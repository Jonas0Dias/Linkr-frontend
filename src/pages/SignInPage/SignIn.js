import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import axios from "axios";
import TransparentBackground from "../../components/Background/TransparentBackground";
import ThreeDotsLoader from "../../components/Loaders/ThreeDotsLoader";
import { StyledButton, Title, StyledInputs, Wrapper } from "./SignInStyle";

export default function Login(props) {

    const navigate = useNavigate();

    const [entrar, setEntrar] = useState('Log In')

    async function handleButton() { // Trocar pra await try/catch depois se possivel

        setEntrar('')
        props.setHabilitado(true)

        axios.post(`${process.env.REACT_APP_API_URL}/login`, props.login)
            .then((res) => {
                // console.log(res.data)
                props.setDadosUsuario(res.data)
                // localStorage.setItem('userInfo', JSON.stringify(res.data))
                props.setHabilitado(false);
                setEntrar('Log In')
                navigate('/home')
            })
            .catch(() => {
                alert('Usuário ou senha incorretos')
                props.setHabilitado(false)
                setEntrar('Log In')
            })
    }

    return (
        <Wrapper>
            
          

            <Animated
                animationIn="fadeInDown"
                animationInDuration={1000}
                isVisible={true}
            >
                <Title>
                    <h1>linkr</h1>
                    <p>save, share and discover
the best links on the web</p>
                </Title>
            </Animated>

            <Animated
                animationIn="fadeInUp"
                animationInDuration={1200}
                isVisible={true}
            >
                <StyledInputs>
                    <input
                        type='email'
                        placeholder="email"
                        disabled={props.habilitado}
                        onChange={e => props.setLogin({ ...props.login, email: e.target.value })}
                    />
                    <input
                        type='password'
                        placeholder="senha"
                        disabled={props.habilitado}
                        onChange={e => props.setLogin({ ...props.login, password: e.target.value })}
                    />
                    <StyledButton onClick={() => handleButton()}>
                        {entrar === 'Log In' ? entrar : <ThreeDotsLoader />}
                    </StyledButton>
                </StyledInputs>

                <Link to='/cadastro'><p className="cadastro" >First time? Create an account!</p></Link>
            </Animated>
        </Wrapper>
    )
}
