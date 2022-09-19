import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const topic = 'fruit-of-the-day'
const msg = new TextEncoder().encode('banana')

await ipfs.pubsub.publish(topic, msg)

// msg was broadcasted
console.log(`published to ${topic}`);
