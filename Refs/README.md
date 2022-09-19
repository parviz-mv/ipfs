.refs(ipfsPath, [options]) - Get links (references) from an object.

.refs.local([options])
Output all local references (CIDs of all blocks in the blockstore)

Blocks in the blockstore are stored by multihash and not CID so yielded CIDs are v1 CIDs with the 'raw' codec. These may not match the CID originally used to store a given block, though the multihash contained within the CID will.