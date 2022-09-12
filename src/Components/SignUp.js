import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../Common/Service";
import MainContent from "../Styles/MainContent";

export default function SignUp() {

    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        repeat_password: ""
    });

    function handleForm (event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    function sendForm (e) {
        e.preventDefault();

        const promise = signUp(form);
        setIsDisabled(true);
        
        promise.then( () => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/")
        });
        
        promise.catch((res) => {
            alert(`${res.response.data}`);
            setIsDisabled(false);
        });

    }

    return (
        <MainContent>
            <h1>My Wallet</h1>
            <form onSubmit={sendForm}>
                <input 
                    type="text" 
                    placeholder="Nome"
                    name="name" 
                    disabled={isDisabled} 
                    value={form.name}               
                    onChange={handleForm}
                    required
                    >
                </input>
                <input 
                    type="email" 
                    placeholder="E-mail"
                    name="email"
                    disabled={isDisabled}
                    value={form.email}              
                    onChange={handleForm}
                    required
                    >
                </input>
                <input 
                    type="password" 
                    placeholder="Senha"
                    name="password"
                    disabled={isDisabled}
                    value={form.password}          
                    onChange={handleForm}
                    required
                    >
                </input>
                <input 
                    type="password" 
                    placeholder="Confirme a senha"
                    name="repeat_password"
                    disabled={isDisabled}
                    value={form.repeat_password}          
                    onChange={handleForm}
                    required
                    >
                </input>
                <button type="submit" disabled={isDisabled}>Cadastrar</button>
            </form>
            <Link to={'/'}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </MainContent>
    )
}