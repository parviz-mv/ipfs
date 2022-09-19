import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

// To copy a file
await ipfs.files.cp("/src-file", "/dst-file");

// To copy a directory
await ipfs.files.cp("/src-dir", "/dst-dir");

// To copy multiple files to a directory
await ipfs.files.cp(["/src-file1", "/src-file2"], "/dst-dir");
