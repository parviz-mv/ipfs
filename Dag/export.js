import { Readable } from 'readable-stream';
// import { Readable } from 'stream';
import * as IPFS from 'ipfs';
import fs from "fs"

const ipfs = await IPFS.create()
const { cid } = await ipfs.add('Hello world')
console.info(cid)

const out = ipfs.dag.export(cid)

Readable.from(out).pipe(fs.createWriteStream('example.car'))

