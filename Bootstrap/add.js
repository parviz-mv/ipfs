import * as IPFS from 'ipfs';
import { Multiaddr } from '@multiformats/multiaddr';

const ipfs = await IPFS.create()

const validIp4 = new Multiaddr('/ip4/192.168.68.111/tcp/4002/p2p/12D3KooWDGYWsDbxVmGPq7MiuW3xVG2uoYBCDX1gEC9NuiqacEJq')

const res = await ipfs.bootstrap.add(validIp4)
console.log(res.Peers)
// Logs:
// ['/ip4/104....9z']