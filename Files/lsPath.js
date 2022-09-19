import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

for await (const file of ipfs.files.ls('/screenshots')) {
      console.log(file.name)
    }
    // 2018-01-22T18:08:46.775Z.png
    // 2018-01-22T18:08:49.184Z.png