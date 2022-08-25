import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Expenses, Invoices, Testpage } from "./routes";
import App from "./App";

export default function Routing() {
return (<BrowserRouter>
<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
    <Route path="testpage" element={<Testpage />} />
  </Route>
</Routes>
</BrowserRouter>);
};