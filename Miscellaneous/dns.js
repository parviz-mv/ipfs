import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const path = await ipfs.dns('ipfs.io')
console.log(path)