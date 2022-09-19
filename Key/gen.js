import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const key = await ipfs.key.gen('my-key', {
      type: 'rsa',
      size: 2048
  })
  
  console.log(key)
  // { id: 'QmYWqAFvLWb2G5A69JGXui2JJXzaHXiUEmQkQgor6kNNcJ',
  //  name: 'my-key' }