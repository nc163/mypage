// import semaphore from "semaphore";
import { useState, useEffect, useReducer, useContext, useRef } from "react";
// import useIpfsFactory from "./hooks/use-ipfs-factory";
// import useIpfs from "./hooks/use-ipfs";
import { create } from "ipfs-core";

const useIPFS = () => {
  const sem = require("semaphore")(1);
  const ipfs = useRef(null);
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    return () => {
      if (ipfs.current && ipfs.current.stop) {
        console.log("Stopping IPFS");
        ipfs.current.stop().catch((e) => console.error(e));
        ipfs.current = null;
        setReady(false);
      }
    };
  }, []);

  async function start() {
    sem.take(1, async () => {
      if (ipfs.current) {
        console.log("IPFS already started");
      } else if (ipfs.current && ipfs.current.enable) {
        console.log("Found ipfs");
        ipfs.current = await ipfs.current.enable({ commands: ["id"] });
      } else {
        try {
          console.time("IPFS Started");
          ipfs.current = await create();
          console.timeEnd("IPFS Started");
        } catch (e) {
          console.error("IPFS init error:", e);
          ipfs.current = null;
          setError(e);
        }
      }
      setReady(Boolean(ipfs.current));
      sem.leave();
    });
  }
  //
  return [ipfs.current, { ready, error, start }];
};

export default function Test(props) {
  //
  const [ipfs, { ready, error, start }] = useIPFS();

  // const onStart = () => {
  //   start();
  // };

  const Click = () => {
    console.log("start");
    console.log(ipfs);
  };

  return (
    <div>
      <h1>Test</h1>
      <div>
        <p>ipfs is {ready ? "ready" : "not ready"}</p>
        <p>{error}</p>
        <button onClick={async () => start()}>START</button>
      </div>
      <hr />
      {ready && (
        <div>
          <button onClick={Click}>START</button>
        </div>
      )}
    </div>
  );
}
