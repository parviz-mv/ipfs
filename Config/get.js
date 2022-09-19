import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()

const config = await ipfs.config.get('Identity.PeerID')
console.log(config)