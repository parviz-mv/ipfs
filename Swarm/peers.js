import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const peerInfos = await ipfs.swarm.peers()
console.log(peerInfos)