import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const version = await ipfs.version()
console.log(version)