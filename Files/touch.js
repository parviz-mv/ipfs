import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

// set the mtime to the current time
await ipfs.files.touch('/path/to/file.txt')

// set the mtime to a specific time
await ipfs.files.touch('/path/to/file.txt', {
  mtime: new Date('May 23, 2014 14:45:14 -0700')
});
