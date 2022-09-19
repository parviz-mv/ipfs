import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

await ipfs.pin.remote.rm({
      service: 'pinata',
      name: 'block-party'
    })