import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()


const peerId = await ipfs.add('Hello world')

// console.log(peerId);

const list = await ipfs.bitswap.wantlistForPeer(peerId)
console.log(list)
// [ CID('QmHash') ]