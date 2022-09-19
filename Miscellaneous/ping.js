import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

for await (const res of ipfs.ping('Qmhash')) {
      if (res.time) {
        console.log(`Pong received: time=${res.time} ms`)
      } else {
        console.log(res.text)
      }
    }