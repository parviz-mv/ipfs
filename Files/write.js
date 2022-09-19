import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

await ipfs.files.write('/hello-world', new TextEncoder().encode('Hello, world!'))