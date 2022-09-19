import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()

await ipfs.config.set('Discovery.MDNS.Enabled', false)
// MDNS Discovery was set to false