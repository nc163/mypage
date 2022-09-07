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
  const [text, setText] = useState();
  const [version, setVersion] = useState(null);

  useEffect(() => {
    if (!ipfs) return;
    const getVersion = async () => {
      const nodeId = await ipfs.version();
      setVersion(nodeId);
    };
    getVersion();
  }, [ipfs]);

  const _onClick = () => {
    if (ipfs) {
      const run = async () => {
        let cid = await ipfs.dag.put({ text: text });
        console.log(cid);
        return cid;
      };

      run();
    }
  };

  return (
    <div className="text-white">
      <main>
        {ipfsInitError && (
          <div className="">
            Error: {ipfsInitError.message || ipfsInitError}
          </div>
        )}
        {(id || version) && (
          <section className="">
            <h1 className="" data-test="title">
              Connected to IPFS
            </h1>
            <div className="">
              {id && <IpfsId obj={id} keys={["id", "agentVersion"]} />}
              {version && <IpfsId obj={version} keys={["version"]} />}
            </div>
          </section>
        )}
        <p>文字を入力</p>
        <input
          style={{ color: "black" }}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={_onClick}>送信</button>
      </main>
    </div>
  );
}

const Title = ({ children }) => {
  return <h2 className="">{children}</h2>;
};

const IpfsId = ({ keys, obj }) => {
  if (!obj || !keys || keys.length === 0) return null;
  return (
    <>
      {keys?.map((key) => (
        <div className="mb4" key={key}>
          <Title>{key}</Title>
          <div className="" data-test={key}>
            {obj[key].toString()}
          </div>
        </div>
      ))}
    </>
  );
};

export default Bbs;
