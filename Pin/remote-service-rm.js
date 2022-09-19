import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

await ipfs.pin.remote.service.rm('pinata')
