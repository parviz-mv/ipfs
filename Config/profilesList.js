import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()

const profiles = await ipfs.config.profiles.list()
profiles.forEach(profile => {
  console.info(profile.name, profile.description)
})