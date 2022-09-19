import * as IPFS from 'ipfs';
import all from 'it-all'

const ipfs = await IPFS.create()

const { cid } = await ipfs.add('should put a value to the DHT')

const publish = await ipfs.name.publish(cid)

console.log(publish.name);

let record;

for await (const event of ipfs.dht.get(`/ipns/${publish.name}`)) {
      if (event.name === 'VALUE') {
    record = event.value
    break;
  }
}
// const events = await all(ipfs.dht.put(`/ipns/${publish.name}`, record, { verbose: true }))
// const peerResponse = events.filter(event => event.name === 'PEER_RESPONSE').pop()


for await (const message of ipfs.dht.put(`/ipns/${publish.name}`, record, { verbose: true })) {
      console.log(message)
    }
    



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