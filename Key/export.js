import * as IPFS from "ipfs";
import { nanoid } from 'nanoid'

const ipfs = await IPFS.create();
const password = nanoid();


const pem = await ipfs.key.export('your-key2', password )

console.log(pem)
// -----BEGIN ENCRYPTED PRIVATE KEY-----
// MIIFDTA/BgkqhkiG9w0BBQ0wMjAaBgkqhkiG9w0BBQwwDQQIpdO40RVyBwACAWQw
// ...
// YA==
// -----END ENCRYPTED PRIVATE KEY-----