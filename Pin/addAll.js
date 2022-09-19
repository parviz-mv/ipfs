import * as IPFS from "ipfs";
import { CID } from "multiformats/cid";

const ipfs = await IPFS.create();


for await (const cid of ipfs.pin.addAll(CID.parse('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u'))) {
      console.log(cid)
    }
// Logs:
// CID('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u')
