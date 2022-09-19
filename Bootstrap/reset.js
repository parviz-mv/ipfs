import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()

const res = await ipfs.bootstrap.reset();
console.log('removed Peers',res.Peers);
// Logs:
// ['/ip4/104....9z']