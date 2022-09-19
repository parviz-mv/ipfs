import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const key = await ipfs.key.rename('my-key', 'my-new-key')

console.log(key)
// { id: 'Qmd4xC46Um6s24MradViGLFtMitvrR4SVexKUgPgFjMNzg',
//   was: 'my-key',
//   now: 'my-new-key',
//   overwrite: false }