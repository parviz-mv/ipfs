Block - The 'ipfs add' command will create a Merkle DAG out of the data in the files you specify. It follows the UnixFS data format (opens new window)when doing this. This means that your files are broken down into blocks, and then arranged in a tree-like structure using 'link nodes' to tie them together. A given file's 'hash' is actually the hash of the root (uppermost) node in the DAG. For a given DAG, you can easily view the sub-blocks under it with ipfs ls.


block.get - Get a raw IPFS block.
(Получите необработанный блок IPFS)

block.put -Stores input as an IPFS block.
(Сохраняет ввод в виде блока IPFS.)

block.rm - Remove one or more IPFS block(s)
(Удалит один или несколько блоков IPFS)

block.stat - Print information of a raw IPFS block.
(Распечатаeт информацию о необработанном блоке IPFS.)


