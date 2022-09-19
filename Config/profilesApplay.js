import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()

const diff = await ipfs.config.profiles.apply('lowpower')
console.info(diff.original)
console.info(diff.updated)