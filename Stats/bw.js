import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

for await (const stats of ipfs.stats.bw()) {
      console.log(stats)
    }
    // { totalIn: BigInt {...},
    //   totalOut: BigInt {...},
    //   rateIn: number {...},
    //   rateOut: number {...} }