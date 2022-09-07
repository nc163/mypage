import React from "react";
import "./assets/css/App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
          <Link
            className="flex-none w-64 h-14 text-blue-500 hover:text-blue-800"
            to="/about"
          >
            About
          </Link>
          <Link
            className="flex-none w-64 text-blue-500 hover:text-blue-800"
            to="/bbs"
          >
            BBS
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
