
import * as IPFS from 'ipfs';
import drain from 'it-drain'

const ipfs = await IPFS.create()
const cid  = await ipfs.add('should put a value to the DHT')
console.log(cid.path);

// await drain(ipfs.dht.provide('QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR'))

// for await (const message of ipfs.dht.provide('QmPwUfgXZFGbiri1AjwojPGFZu9wmTAV7B2D9zsKo4XQG7')) {
//       console.log(message)
//     }
    
    /*
    Prints objects like:
    
    {
      extra: 'dial backoff',
      id: PeerId('QmWtewmnzJiQevJPSmG9s8aC7yRfK2WXTCdRc1pCbDFu6z'),
      responses: [
        {
          addrs: [
            Multiaddr(/ip4/127.0.0.1/tcp/4001),
            Multiaddr(/ip4/172.20.0.3/tcp/4001),
            Multiaddr(/ip4/35.178.190.196/tcp/1024)
          ],
          id: PeerId('QmRz5Nth4jTFuJJKcjyb6uwvrhxWbruRvamKY2PJxwJKw8')
        }
      ],
      type: 1
    }
    
    For message `type` values, see:
    https://github.com/libp2p/go-libp2p-core/blob/6e566d10f4a5447317a66d64c7459954b969bdab/routing/query.go#L15-L24
    */