import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const stats = await ipfs.repo.stat()
console.log(stats)

// { numObjects: 15,
//   repoSize: 64190,
//   repoPath: 'C:\\Users\\henri\\AppData\\Local\\Temp\\ipfs_687c6eb3da07d3b16fe3c63ce17560e9',
//   version: 'fs-repo@6',
//   storageMax: 10000000000 }