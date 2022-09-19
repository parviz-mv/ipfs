import * as IPFS from 'ipfs';
const ipfs = await IPFS.create()

// Defaults
const buf = new TextEncoder().encode('a serialized object')
const decoder = new TextDecoder();

const block = await ipfs.block.put(buf)

console.log(decoder.decode(block.data))
// Logs:
// a serialized object
console.log('CID block:',block)
// Logs:
// the CID of the object