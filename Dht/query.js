
import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()

for await (const info of ipfs.dht.query('QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR')) {
      console.log('info is',info)
    }
    
    /*
    Prints objects like:
    
    {
      extra: 'dial backoff',
      id: 'QmWtewmnzJiQevJPSmG9s8aC7yRfK2WXTCdRc1pCbDFu6z',
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