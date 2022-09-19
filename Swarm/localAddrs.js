import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const multiAddrs = await ipfs.swarm.localAddrs()
console.log(multiAddrs)