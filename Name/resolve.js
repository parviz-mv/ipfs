import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

// The IPNS address you want to resolve.
const addr = '/ipns/ipfs.io'

for await (const name of ipfs.name.resolve(addr)) {
  console.log(name)
  // /ipfs/QmQrX8hka2BtNHa8N8arAq16TCVx5qHcb46c5yPewRycLm
}