import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const addr = '/ip4/192.168.68.101/tcp/4002/p2p/12D3KooWDcFrjEvB5jX1k58KaTrbAxtJqJvoAWf2q7hdWYYZUyRh'

await ipfs.swarm.connect(addr)