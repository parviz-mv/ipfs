Bootstrap -Управляет списком начальной загрузки, который 
содержит адреса узлов начальной загрузки. Это доверенные 
одноранговые узлы, от которых можно узнать о других 
одноранговых узлах в сети.

The IPFS bootstrap list is a list of peers with which the IPFS daemon learns about other peers on the network. IPFS comes with a default list of trusted peers, but you are free to modify the list to suit your needs. One popular use for a custom bootstrap list is to create a personal IPFS network.


bootstrap.add - Add a peer address to the bootstrap list 
(Добавить одноранговый адрес в список начальной загрузки)

bootstrap.reset - Reset the bootstrap list to contain only the default bootstrap nodes. 
(Сбросьте список начальной загрузки, чтобы он содержал только узлы начальной загрузки по умолчанию)

bootstrap.list - List all peer addresses in the bootstrap list.
(Список всех одноранговых адресов в списке начальной загрузки)

bootstrap.rm - Remove a peer address from the bootstrap list 
(Удалить одноранговый адрес из списка начальной загрузки )

bootstrap.clear - Remove all peer addresses from the bootstrap list.
(Удалить все одноранговые адреса из списка начальной загрузки)
