import * as IPFS from "ipfs";
const ipfs = await IPFS.create();

const topic = 'fruit-of-the-day'

const receiveMsg = (msg) => console.log(new TextDecoder().decode(msg.data))

await ipfs.pubsub.subscribe(topic, receiveMsg)

const peerIds = await ipfs.pubsub.peers(topic)
console.log(peerIds)