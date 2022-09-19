// import { Readable } from 'readable-stream';
// import { Readable } from 'stream';
import * as IPFS from 'ipfs';

const ipfs = await IPFS.create();
const obj = {simple:'object'};

const cid  = await ipfs.dag.put(obj,{
    storeCodec: 'dag-cbor', hashAlg: 'sha2-512' 
});

console.log(cid.toString());
// console.log(cid);



