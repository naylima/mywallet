import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../Common/Service";
import MainContent from "../Styles/MainContent";

export default function Login () {

    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password:""
    });

    function handleForm(event) {

        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    function sendForm (e) {
        e.preventDefault();

        const promise = signIn(form);
        setIsDisabled(true);
        
        promise.then( (res) => {
            
            const token = res.data;            
            localStorage.setItem("mywallet", JSON.stringify({token: token}));
            navigate("/home");

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
                <button type="submit" disabled={isDisabled}>Entrar</button>
            </form>
            <Link to={'/sign-up'}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </MainContent>
    )
}
