import { CID } from 'multiformats/cid'
import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()

const providers = ipfs.dht.findProvs(CID.parse('QmdPAhQRxrDKqkGPvQzBvjYe3kU8kiEEAd2J6ETEamKAD9'))

for await (const provider of providers) {
  console.log(provider.id.toString())
}