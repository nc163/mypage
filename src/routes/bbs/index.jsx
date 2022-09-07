import { useState, useEffect } from "react";
import useIpfsFactory from "./hooks/use-ipfs-factory";
import useIpfs from "./hooks/use-ipfs";

// export default function Bbs(props) {
//   const [text, setText] = useState();
//   const _onClick = () => {
//     console.log(text);
//   };
//   return (
//     <main style={{ padding: "1rem 0", color: "white" }}>
//       <p>文字を入力</p>
//       <input
//         style={{ color: "black" }}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={_onClick}>送信</button>
//     </main>
//   );
// }
function Bbs() {
  const { ipfs, ipfsInitError } = useIpfsFactory({ commands: ["id"] });
  const id = useIpfs(ipfs, "id");
  const [version, setVersion] = useState(null);

  useEffect(() => {
    if (!ipfs) return;

    const getVersion = async () => {
      const nodeId = await ipfs.version();
      setVersion(nodeId);
    };

    getVersion();
  }, [ipfs]);

  return (
    <div className="sans-serif">
      <header className="flex items-center pa3 bg-navy bb bw3 b--aqua">
        <h1 className="flex-auto ma0 tr f3 fw2 montserrat aqua">IPFS React</h1>
      </header>
      <main>
        {ipfsInitError && (
          <div className="bg-red pa3 mw7 center mv3 white">
            Error: {ipfsInitError.message || ipfsInitError}
          </div>
        )}
        {(id || version) && (
          <section className="bg-snow mw7 center mt5">
            <h1 className="f3 fw4 ma0 pv3 aqua montserrat tc" data-test="title">
              Connected to IPFS
            </h1>
            <div className="pa4">
              {id && <IpfsId obj={id} keys={["id", "agentVersion"]} />}
              {version && <IpfsId obj={version} keys={["version"]} />}
            </div>
          </section>
        )}
      </main>
      <footer className="react-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="react-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

const Title = ({ children }) => {
  return <h2 className="f5 ma0 pb2 aqua fw4 montserrat">{children}</h2>;
};

const IpfsId = ({ keys, obj }) => {
  if (!obj || !keys || keys.length === 0) return null;
  return (
    <>
      {keys?.map((key) => (
        <div className="mb4" key={key}>
          <Title>{key}</Title>
          <div className="bg-white pa2 br2 truncate monospace" data-test={key}>
            {obj[key].toString()}
          </div>
        </div>
      ))}
    </>
  );
};

export default Bbs;
