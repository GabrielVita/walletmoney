import { useContext } from "react";
import { SearchForm } from "../SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Historic(){
    const {transactions} = useContext(TransactionsContext);
    return(
        <TransactionsContainer>
            <SearchForm/>
            <TransactionsTable>
                
                <tbody>
                    {transactions.map(transaction =>{
                        return(
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type}>
                                        {transaction.price}
                                    </PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
    );
}