import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()

const res = await ipfs.bootstrap.list()
console.log('Peers:',res.Peers)
// Logs:
// [address1, address2, ...]