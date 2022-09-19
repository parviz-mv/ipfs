import * as IPFS from "ipfs";
import { CID } from "multiformats/cid";

const ipfs = await IPFS.create();

const cid = await ipfs.pin.add(
  CID.parse("QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u")
);
console.log(cid);

// Logs:
// CID('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u')
