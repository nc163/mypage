const express = require("express");
//
require("dotenv").config();
const ENV = process.env;

const app = express();
const port = 3000;
const ipfsgateway = ENV.IPFS_GATEWAY || "https://ipfs.io/ipfs/";
// const ipfs_client = create(new URL(ipfsgateway));

app.get("/", (req, res) => {
  res.send("Hello World!");

  const IPFS = await import("ipfs-core");
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
