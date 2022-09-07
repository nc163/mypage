import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, BBS } from "./routes";
import App from "./App.jsx";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="bbs" element={<BBS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
