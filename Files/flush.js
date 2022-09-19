import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const cid = await ipfs.files.flush('/')