// const IPFS = require("ipfs");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
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
