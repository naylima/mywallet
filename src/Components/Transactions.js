import { Transaction } from "../Styles/HomeStyle"

export default function Transactions ({ transactions }) {

    return (
        
        transactions.map((transaction, id) => (

            <Transaction key={id} type = {transaction.type}>
                <span className="date">{transaction.date}</span>
                <span className="description">{transaction.description}</span>
                <span>{Number(transaction.value).toFixed(2)}</span>
            </Transaction>

        ))
    )
}