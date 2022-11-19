const Express = require("express");
const OrbitDB = require("orbit-db");
const IPFS = require("ipfs");
//
require("dotenv").config();
const ENV = process.env;

const app = Express();
const port = 3000;
const ipfsgateway = ENV.IPFS_GATEWAY || "https://ipfs.io/ipfs/";
// const ipfs_client = create(new URL(ipfsgateway));

app.get("/", (req, res) => {
  res.send("Hello World!");

  // const IPFS = await import("ipfs-core");
});

// メッセージをpin止めする
// app.get("/message", (req, res) => {
//   const run = async () => {
//     let cid = await ipfs.dag.put({ text: text });
//     console.log(cid);
//     return cid;
//   };

//   run();
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// (async function () {
//   const ipfs = await IPFS.create();
//   const orbitdb = await OrbitDB.createInstance(ipfs);

//   // Create / Open a database
//   const db = await orbitdb.log("hello");
//   await db.load();

//   // Listen for updates from peers
//   db.events.on("replicated", (address) => {
//     console.log(db.iterator({ limit: -1 }).collect());
//   });

//   // Add an entry
//   const hash = await db.add("world");
//   console.log(hash);

//   // Query
//   const result = db.iterator({ limit: -1 }).collect();
//   console.log(JSON.stringify(result, null, 2));
// })();
