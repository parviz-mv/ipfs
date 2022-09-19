import * as IPFS from 'ipfs';

const ipfs = await IPFS.create();

// example obj
const obj = {
    a: 1,
    b: [1, 2, 3],
    c: {
      ca: [5, 6, 7],
      cb: 'foo'
    }
  }
  
  const cid = await ipfs.dag.put(obj, { storeCodec: 'dag-cbor', hashAlg: 'sha2-256' })
  console.log(cid.toString())
  // bafyreicyer3d34cutdzlsbe2nqu5ye62mesuhwkcnl2ypdwpccrsecfmjq
  
  const result = await ipfs.dag.resolve(`${cid}/c/cb`)
  console.log(result)
  // Logs:
  // {
  //   cid: CID(bafyreicyer3d34cutdzlsbe2nqu5ye62mesuhwkcnl2ypdwpccrsecfmjq),
  //   remainderPath: 'c/cb'
  // }