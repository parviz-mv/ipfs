import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

await ipfs.pin.remote.service.add('pinata', {
      endpoint: new URL('https://api.pinata.cloud'),
      key: 'your-pinata-key'
    })

