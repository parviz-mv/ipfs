import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const version = await ipfs.repo.version()
console.log(version)

// "6"