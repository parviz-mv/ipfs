import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const topic = 'fruit-of-the-day'
const receiveMsg = (msg) => console.log(msg.toString())

await ipfs.pubsub.subscribe(topic, receiveMsg)
console.log(`subscribed to ${topic}`)
//------Unsubscribes from a pubsub topic------------
await ipfs.pubsub.unsubscribe(topic, receiveMsg)
console.log(`unsubscribed from ${topic}`)
//---------Wremoving all listeners------------------
await ipfs.pubsub.unsubscribe(topic);

