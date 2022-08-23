import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Top</Link>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/testpage">Testpage</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
