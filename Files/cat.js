import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const ipfsPath  = await ipfs.add('Hello world')

for await (const chunk of ipfs.cat(ipfsPath.path)) {
      console.info(chunk.toString())
    }