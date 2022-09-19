import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

// To give a file -rwxrwxrwx permissions
await ipfs.files.chmod('/path/to/file.txt', parseInt('0777', 8))

// Alternatively
await ipfs.files.chmod('/path/to/file.txt', '+rwx')

// You can omit the leading `0` too
await ipfs.files.chmod('/path/to/file.txt', '777')