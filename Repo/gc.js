import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

for await (const res of ipfs.repo.gc()) {
  console.log(res);
}
