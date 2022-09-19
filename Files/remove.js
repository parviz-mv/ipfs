import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

// To remove a file
await ipfs.files.rm('/my/beautiful/file.txt')

// To remove multiple files
await ipfs.files.rm(['/my/beautiful/file.txt', '/my/other/file.txt'])

// To remove a directory
await ipfs.files.rm('/my/beautiful/directory', { recursive: true })