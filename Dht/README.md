A distributed hash table (DHT)- is a distributed system for mapping keys to values.In IPFS, the DHT is used as the fundamental component of the content routing system and acts like a cross between a catalog and a navigation system.

(В IPFS- DHT используется как основной компонент системы маршрутизации контента и действует как нечто среднее между каталогом и системой навигации.)

findPeer(peerId, [options])- Find the multiaddresses associated with a Peer ID.
(Найдет мультиадреса, связанные с Peer ID)

findProvs(cid, [options])--Find peers that can provide a specific value, given a CID.
(Найдет одноранговые узлы, которые могут предоставить определенное значение, учитывая CID.)

get(key, [options]) - Given a key, query the routing system for its best value.
(Получив ключ, запросите у системы маршрутизации его наилучшее значение.)

provide(cid, [options])--Announce to the network that you are providing given values.
(Объявите сети, что вы предоставляете заданные значения.)

put(key, value, [options])- Write a key/value pair to the routing system.
(Запишите пару ключ/значение в систему маршрутизации.)

query(peerId, [options])- Find the closest Peer IDs to a given Peer ID or CID by querying the DHT.
(Найдите ближайшие Peer ID к заданному Peer ID или CID, запросив DHT)

