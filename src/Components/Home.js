import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { logout, getUser, getTransactions } from '../Common/Service';
import { Main, Top, Container, Bottom, Transaction} from '../Styles/HomeStyle';
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import Transactions from './Transactions';

export default function Home () {

    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        const promise = getUser();

        promise.then((res) => {

            setUser(res.data);

            const promise = getTransactions();
            promise.then((res) => {
                setTransactions(res.data);           

            });

        });

    }, []);

    let total = 0;

    transactions.forEach(transaction => {
        if(transaction.type === "in") total += Number(transaction.value);
        if(transaction.type === "out") total -= Number(transaction.value);
    });

    function exit () {

        if(window.confirm('Deseja realmente sair?')) {
            const promise = logout();
            promise.then(() => navigate("/"));
        }
    }

    return (
        <Main>
            <Top>
                <h1>Olá, {user.name}</h1>
                <IoExitOutline 
                    className="exit" 
                    onClick={() => exit()}
                />
            </Top>
            <Container total={total}>

                { transactions.length === 0 ? (

                    <p>
                        Não há registros de entrada ou saída
                    </p>

                ):(   
                    <div>
                        <div className='container'>
                            <Transactions transactions = {transactions}/>
                        </div>

                        <Transaction className='balance'>
                            <span>SALDO</span>
                            <span>{total.toFixed(2)}</span>
                        </Transaction>
                    </div> 

                )}   

            </Container>
            <Bottom>
                <div>
                    <AiOutlinePlusCircle 
                        className="icon" 
                        onClick={() => navigate('/entrada')}
                    />                    
                    <span>Nova entrada</span>
                </div>
                <div>                    
                    <AiOutlineMinusCircle 
                        className="icon" 
                        onClick={() => navigate('/saida')}
                    />
                    <span>Nova saída</span>
                </div>
            </Bottom>
        </Main>
    )
}