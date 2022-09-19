import * as IPFS from "ipfs";
import { CID } from "multiformats/cid";

const ipfs = await IPFS.create();

const cid = ipfs.pin.rm(CID.parse('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u'))
console.log(cid)
// prints the CID that was unpinned
// CID('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u')