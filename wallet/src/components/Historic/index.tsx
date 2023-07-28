import { SearchForm } from "../SearchForm"
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"

export function Historic(){
    return(
        <TransactionsContainer>
            <SearchForm/>
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHighlight variant="income">
                                R$ 10.000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>25/07/2023</td>
                    </tr>
                    <tr>
                        <td>Carro</td>
                        <td>
                            <PriceHighlight variant="outcome">
                                - R$ 10.000,00
                            </PriceHighlight>
                        </td>
                        <td>Manutenção</td>
                        <td>25/07/2023</td>
                    </tr>
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
    );
}