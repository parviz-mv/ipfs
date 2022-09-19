import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

// Delete all non 'pinned' pins
await ipfs.pin.remote.rmAll({
      service: 'pinata',
      status: ['queued', 'pinning', 'failed']
    })