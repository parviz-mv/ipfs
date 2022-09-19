import * as IPFS from "ipfs";
import { CID } from "multiformats/cid";

const ipfs = await IPFS.create();

const cid = CID.parse('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u')
const pin = await ipfs.pin.remote.add(cid, {
  service: 'pinata',
  name: 'block-party'
})
console.log(pin)
// Logs:
// {
//    status: 'pinned',
//    cid: CID('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u'),
//    name: 'block-party'
// }

