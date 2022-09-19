import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

addr = ''
await ipfs.swarm.disconnect(addr)