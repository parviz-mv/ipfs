import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()

const key = '/ipns/k51qzi5uqu5dl0dbfddy2wb42nvbc6anyxnkrguy5l0h0bv9kaih6j6vqdskqk'
const value = await ipfs.dht.get(key)

