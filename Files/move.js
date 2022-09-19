import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

await ipfs.files.mv('/src-file', '/dst-file')

await ipfs.files.mv('/src-dir', '/dst-dir')

await ipfs.files.mv(['/src-file1', '/src-file2'], '/dst-dir')