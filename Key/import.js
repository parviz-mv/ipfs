import * as IPFS from "ipfs";
import { nanoid } from 'nanoid'
import { keys } from '@libp2p/crypto'

const ipfs = await IPFS.create();
const password = nanoid();

const key = await keys.generateKeyPair('Ed25519')

const exported = await key.export(password)

const importedKey = await ipfs.key.import('clone',exported, password)

console.log(importedKey)
// { id: 'QmQRiays958UM7norGRQUG3tmrLq8pJdmJarwYSk2eLthQ',
//   name: 'clone' }