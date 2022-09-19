import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const info = await ipfs.dht.findPeer(
  "12D3KooWDcFrjEvB5jX1k58KaTrbAxtJqJvoAWf2q7hdWYYZUyRh"
);

// console.log(info.id)
/*
QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt
*/

info.addrs.forEach((addr) => console.log(addr.toString()));
/*
/ip4/147.75.94.115/udp/4001/quic
/ip6/2604:1380:3000:1f00::1/udp/4001/quic
/dnsaddr/bootstrap.libp2p.io
/ip6/2604:1380:3000:1f00::1/tcp/4001
/ip4/147.75.94.115/tcp/4001
*/
