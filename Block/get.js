import * as IPFS from 'ipfs';
import { CID } from 'multiformats/cid';

const ipfs = await IPFS.create()
// const {cid}  = await ipfs.add('Hello world')

const block = await ipfs.block.get(CID.parse('QmcnVGQ3bzfMpTMAXfJvZ7YpywZP3ZkRijGr6BomrfcVLR'))
console.log(Buffer.from(block).toString());
