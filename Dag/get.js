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
  // zdpuAmtur968yprkhG9N5Zxn6MFVoqAWBbhUAkNLJs2UtkTq5
  
  async function getAndLog(cid, path) {
    const result = await ipfs.dag.get(cid, { path })
    console.log(result.value)
  }
  
  await getAndLog(cid, '/a')
  // Logs:
  // 1
  
  await getAndLog(cid, '/b')
  // Logs:
  // [1, 2, 3]
  
  await getAndLog(cid, '/c')
  // Logs:
  // {
  //   ca: [5, 6, 7],
  //   cb: 'foo'
  // }
  
  await getAndLog(cid, '/c/ca/1')
  // Logs:
  // 6