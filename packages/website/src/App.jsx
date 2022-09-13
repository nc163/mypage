import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div>mypage</div>
          <Link to="/">top</Link>
          <Link to="/about">about</Link>
          <Link to="/memo">memo</Link>
          <Link to="/test">test</Link>
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
