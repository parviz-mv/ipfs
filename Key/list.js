import * as IPFS from "ipfs";

const ipfs = await IPFS.create();


const keys = await ipfs.key.list()

console.log(keys)
// [
//   { id: 'QmTe4tuceM2sAmuZiFsJ9tmAopA8au71NabBDdpPYDjxAb',
//     name: 'self' },
//   { id: 'QmWETF5QvzGnP7jKq5sPDiRjSM2fzwzNsna4wSBEzRzK6W',
//     name: 'my-key' }
// ]