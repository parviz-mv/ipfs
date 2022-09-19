import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

await ipfs.pin.remote.service.ls()
// [{
//   service: 'pinata'
//   endpoint: new URL('https://api.pinata.cloud'),
// }]

await ipfs.pin.remote.service.ls({ stat: true })
// [{
//   service: 'pinata'
//   endpoint: new URL('https://api.pinata.cloud'),
//   stat: {
//      status: 'valid',
//      pinCount: {
//        queued: 0,
//        pinning: 0,
//        pinned: 1,
//        failed: 0,
//      }
//   }
// }]
