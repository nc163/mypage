import React from "react";
import { Outlet, Link } from "react-router-dom";
import Planetarium from "elements/Planetarium";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <Planetarium createOptions={""}>
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
      </Planetarium>
    </div>
  );
}

export default App;
