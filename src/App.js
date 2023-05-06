import "./App.css";
import Balance from "./components/Balance";
import Form from "./components/Form";
import Heading from "./components/Heading";
import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";
import { GlobalProvider } from "./context/GlobalContext";
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Heading title="Expense Tracker" />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <History />
          <Form />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
