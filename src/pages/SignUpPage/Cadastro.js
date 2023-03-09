import { Link } from "react-router-dom"
import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Title, StyledInputs, Wrapper, StyledButton, Wrapper2 } from "../SignInPage/SignInStyle"
import ThreeDotsLoader from "../../components/Loaders/ThreeDotsLoader"
import { Animated } from "react-animated-css"

export default function Cadastro(props) {

    const navigate = useNavigate();
    const [usuario, setUsuario] = React.useState({ email: '', name: '', password: '', pictureUrl: '' }) // estado que pega as informações do cadastro
    const [entrar, setEntrar] = React.useState('Sign Up') // estado que serve apenas para mudar o nome 'sign Up' para os 3 pontinhos enquantos estiver fazendo a requisição

    async function handleButton() {
        setEntrar('')
        props.setHabilitado(true)

        axios.post(`${process.env.REACT_APP_API_URL}/signup`, usuario)
            .then(() => {
                props.setHabilitado(false);
                navigate('/')
            }).catch(() => {
                alert('Não foi possível cadastrar o usuário.')
                props.setHabilitado(false)
                setEntrar('Sign Up')
            })
    }

    return (
        <Wrapper>

            
                 <Title>
                    <h1>linkr</h1>
                    <p>save, share and discover
the best links on the web</p>
                </Title>
            
            <Wrapper2>
                <StyledInputs>
                    <input
                        type='text'
                        placeholder="nome"
                        value={usuario.name}
                        onChange={e => setUsuario({ ...usuario, name: e.target.value })}
                        disabled={props.habilitado}
                    />
                    <input
                        type='email'
                        placeholder="email"
                        value={usuario.email}
                        onChange={e => setUsuario({ ...usuario, email: e.target.value })}
                        disabled={props.habilitado}
                    />
                    <input
                        type='password'
                        placeholder="senha" 
                        onChange={e => setUsuario({ ...usuario, password: e.target.value })}
                        disabled={props.habilitado}
                    />
                    <input
                        type='url'
                        placeholder="picture URL"
                        onChange={e => setUsuario({ ...usuario, pictureUrl: e.target.value })}
                        disabled={props.habilitado}
                    />
                    <StyledButton onClick={() => handleButton()}>
                        {entrar === 'Sign Up' ? entrar : <ThreeDotsLoader />}
                    </StyledButton>
                </StyledInputs>
                <Link to='/'><p className="cadastro"> Switch back to log in</p></Link>
                </Wrapper2>
            
        </Wrapper>
    )
}