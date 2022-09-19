import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const topics = await ipfs.pubsub.ls()
console.log(topics)