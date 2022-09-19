import * as IPFS from 'ipfs';
import {CID} from 'multiformats/cid'
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'

const ipfs = await IPFS.create();
const data = uint8ArrayFromString('Hello bro!')


const cid = await ipfs.block.put(data)
console.log('Cid data is:',cid);
//QmYRGEeLDcDQqYmHVA9fkxpdS6rs5V7Li3m69K9H3jYWsK

const cidParse = CID.parse('QmYRGEeLDcDQqYmHVA9fkxpdS6rs5V7Li3m69K9H3jYWsK')

const stats = await ipfs.block.stat(cidParse)
console.log(stats.cid.toString())
// Logs: QmQULBtTjNcMwMr4VMNknnVv3RpytrLSdgpvMcTnfNhrBJ
console.log(stats.size)
// Logs: 10