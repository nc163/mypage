import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Memo, Test } from "./routes";
import App from "./App.jsx";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="memo" element={<Memo />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
