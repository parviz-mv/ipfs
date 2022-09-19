import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const identity = await ipfs.id();

console.log(identity);