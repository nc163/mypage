# メモ

install ipfs

```bash
$ npm i --location=global ipfs
```

run

```bash
$ jsipfs daemon
Initializing IPFS daemon...
System version: x64/linux
Node.js version: 16.17.0
generating Ed25519 keypair...
to get started, enter:

        jsipfs cat /ipfs/QmRaaUwTNfwgFZpeUy8qrZwrp2dY4kCKmmB5xEqvH3vtD1/readme

Swarm listening on /ip4/127.0.0.1/tcp/4002/p2p/12D3KooWPZNgcT1rPPTREicZa7zN4jYBPU4gFuxbppVqorF2BDyo
Swarm listening on /ip4/10.0.2.15/tcp/4002/p2p/12D3KooWPZNgcT1rPPTREicZa7zN4jYBPU4gFuxbppVqorF2BDyo
Swarm listening on /ip4/192.168.56.4/tcp/4002/p2p/12D3KooWPZNgcT1rPPTREicZa7zN4jYBPU4gFuxbppVqorF2BDyo
Swarm listening on /ip4/127.0.0.1/tcp/4003/ws/p2p/12D3KooWPZNgcT1rPPTREicZa7zN4jYBPU4gFuxbppVqorF2BDyo
js-ipfs version: 0.16.0
HTTP API listening on /ip4/127.0.0.1/tcp/5002/http
gRPC listening on /ip4/127.0.0.1/tcp/5003/ws
Gateway (read only) listening on /ip4/127.0.0.1/tcp/9090/http
Web UI available at http://127.0.0.1:5002/webui
Daemon is ready
```

`ip4/127.0.0.1/tcp/5002/http` なので `http://127.0.0.1:5002` が http gateway

# よく読む

https://www.npmjs.com/package/ipfs-http-client