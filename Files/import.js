import { create, globSource } from 'ipfs'

const ipfs = await create()

//options specific to globSource
const globSourceOptions = {
  recursive: true
};

//example options to pass to IPFS
const addOptions = {
  pin: true,
  wrapWithDirectory: true,
  timeout: 10000
};

for await (const file of ipfs.addAll(globSource('./docs', globSourceOptions), addOptions)) {
  console.log(file)
}

/*
{
  path: 'docs/assets/anchor.js',
  cid: CID('QmVHxRocoWgUChLEvfEyDuuD6qJ4PhdDL2dTLcpUy3dSC2'),
  size: 15347
}
{
  path: 'docs/assets/bass-addons.css',
  hash: CID('QmPiLWKd6yseMWDTgHegb8T7wVS7zWGYgyvfj7dGNt2viQ'),
  size: 232
}
...
*/