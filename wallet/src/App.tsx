import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transaction } from "./pages/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Empty } from "./pages/Empty";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Router>
      <Routes>
        <Route path="/" element={
          <TransactionsProvider>
            <Transaction/>
          </TransactionsProvider>
        }/>
        <Route path="/empty" element={<Empty/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
  )
}



