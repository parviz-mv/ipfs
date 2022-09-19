import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const result = await ipfs.name.pubsub.subs()
console.log(result)
// ['/ipns/QmQrX8hka2BtNHa8N8arAq16TCVx5qHcb46c5yPewRycLm']