import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const name = 'QmQrX8hka2BtNHa8N8arAq16TCVx5qHcb46c5yPewRycLm'

const result = await ipfs.name.pubsub.cancel(name)
console.log(result.canceled)
// true