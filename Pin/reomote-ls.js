import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

for await (const pin of ipfs.pin.remote.ls({ service: 'pinata' })) {
      console.log(pin)
    }
    // Logs:
    // {
    //    status: 'pinned',
    //    cid: CID('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u'),
    //    name: 'block-party'
    // }
