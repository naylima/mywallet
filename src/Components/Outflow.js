import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTransaction } from "../Common/Service";
import { Main, Top } from "../Styles/HomeStyle";

export default function Inflow () {

    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false);
    const [form, setForm] = useState({
        value: "",
        description: "",
        type: "out"
    });

    function handleForm (event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    function sendForm (e) {
        e.preventDefault();

        const promise = postTransaction(form);
        setIsDisabled(true);
        
        promise.then( () => {
            navigate("/home")
        });
        
        promise.catch((res) => {
            alert(`${res.response.data}`);
            setIsDisabled(false);
        });

    }

    return (
        <Main>
            <Top>
                <h1>Nova saída</h1>
            </Top>
            <form onSubmit={sendForm}>
                <input 
                    type="number"
                    step=".01"
                    placeholder="Valor"
                    name="value"
                    disabled={isDisabled} 
                    value={form.value}               
                    onChange={handleForm}
                    required
                >
                </input>
                <input 
                    type="text" 
                    placeholder="Descrição"
                    name="description"
                    disabled={isDisabled} 
                    value={form.description}               
                    onChange={handleForm}
                    required
                >
                </input>
                <button type="submit" disabled={isDisabled}>Salvar saída</button>
            </form>
        </Main>
    )
}