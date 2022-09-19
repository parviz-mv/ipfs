import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const stats = await ipfs.files.stat('./resume.txt')
console.log(stats)

// {
//   hash: CID('QmXmJBmnYqXVuicUfn9uDCC8kxCEEzQpsAbeq1iJvLAmVs'),
//   size: 60,
//   cumulativeSize: 118,
//   blocks: 1,
//   type: 'file'
// }