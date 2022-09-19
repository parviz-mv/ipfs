import * as IPFS from 'ipfs';
import { Multiaddr } from '@multiformats/multiaddr';

const ipfs = await IPFS.create()

const validIp4 = new Multiaddr('/ip4/192.168.68.111/tcp/4002/p2p/12D3KooWDGYWsDbxVmGPq7MiuW3xVG2uoYBCDX1gEC9NuiqacEJq')
const remove = await ipfs.bootstrap.rm(validIp4)
console.log('removed:',remove.Peers)
// Logs:
// [address1, ...]