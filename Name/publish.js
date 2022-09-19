import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

// The address of your files.
const addr = '/ipfs/QmbezGequPwcsWo8UL4wDF6a8hYwM1hmbzYv2mnKkEWaUp'

const res = await ipfs.name.publish(addr)
// You now have a res which contains two fields:
//   - name: the name under which the content was published.
//   - value: the "real" address to which Name points.
console.log(`https://gateway.ipfs.io/ipns/${res}`)