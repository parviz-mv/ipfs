import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const key = await ipfs.key.rm('my-new-key')

console.log(key)
// { id: 'QmWETF5QvzGnP7jKq5sPDiRjSM2fzwzNsna4wSBEzRzK6W',
//   name: 'my-key' }