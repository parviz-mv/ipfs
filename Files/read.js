import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const chunks = []

for await (const chunk of ipfs.files.read('/hello-world')) {
  chunks.push(chunk)
}

console.log(uint8ArrayConcat(chunks).toString())
// Hello, World!