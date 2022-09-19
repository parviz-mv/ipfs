import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()
const {cid}  = await ipfs.add('Hello world')
console.log(cid);

//get cid from console put.js after create ipfs for removed block

for await (const result of ipfs.block.rm(cid)) {
    if (result.error) {
      console.error(`Failed to remove block ${result.cid} due to ${result.error.message}`)
    } else {
      console.log(`Removed block ${result.cid}`)
    }
  }