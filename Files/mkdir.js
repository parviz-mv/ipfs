import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

await ipfs.files.mkdir('/my/beautiful/directory');