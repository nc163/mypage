import { useState, useEffect, useReducer, useContext, useRef } from "react";
// import { create } from "ipfs-core";
import App from "./App";
import "./assets/css/DApp.css";

function DApp() {
  // const ipfs = useRef(null);
  // const [error, setError] = useState(null);
  // const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = async () => {
      //     if (ipfs.current && ipfs.current.stop) {
      //       console.log("Stopping IPFS");
      //       ipfs.current.stop().catch((e) => console.error(e));
      //       ipfs.current = null;
      //       setReady(false);
    };
    start();
    // };
  }, []);

  return (
    <div className="DApp">
      <App />
      <hr />
    </div>
  );
}

export default DApp;
