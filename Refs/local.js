import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const cid  = await ipfs.add('Hello world')

const ipfsPath = cid.path

for await (const ref of ipfs.refs.local()) {
      if (ref.err) {
        console.error(ref.err)
      } else {
        console.log(ref.ref)
        // output: "QmHash"
      }
    }