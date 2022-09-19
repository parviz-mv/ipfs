import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const result = await ipfs.name.pubsub.state()
console.log(result.enabled)
// true