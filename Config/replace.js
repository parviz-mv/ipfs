import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()

const newConfig = {
      Bootstrap: []
    }
    
    await ipfs.config.replace(newConfig)
    // config has been replaced