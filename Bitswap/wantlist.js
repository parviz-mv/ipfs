import * as IPFS from 'ipfs';

const ipfs = await IPFS.create();

const { cid } = await ipfs.add('Hello world')

const list = await ipfs.bitswap.wantlist()
console.log(list)
// [ CID('QmHash') ]


// const stats= await ipfs.bitswap.stat()
// console.log(stats);

// const list = await ipfs.bitswap.wantlist()
// console.log(list)
// [ CID('QmHash') ]