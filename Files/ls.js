import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const cid = 'QmQ2r6iMNpky5f1m4cnm3Yqw8VSvjuKpTcK1X7dBR1LkJF'

for await (const file of ipfs.ls(cid)) {
  console.log(file.path)
}