import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const cid = 'QmQ2r6iMNpky5f1m4cnm3Yqw8VSvjuKpTcK1X7dBR1LkJF'

for await (const buf of ipfs.get(cid)) {
  // do something with buf
}