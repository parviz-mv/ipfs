import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const topic = 'fruit-of-the-day'
const receiveMsg = (msg) => console.log(new TextDecoder().decode(msg.PeerId))

await ipfs.pubsub.subscribe(topic, receiveMsg)
console.log(`subscribed to ${topic}`)

//-------------------------------------
const topics = await ipfs.pubsub.ls()
console.log(topics)

