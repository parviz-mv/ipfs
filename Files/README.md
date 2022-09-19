Files API - The files API enables users to use the File System abstraction of IPFS. There are two Files API, one at the top level, the original add, cat, get and ls, and another behind the files, also known as MFS.
(API файлов позволяет пользователям использовать абстракцию файловой системы IPFS. Существует два Files API: один на верхнем уровне, оригинальные add, cat, get и ls, а другой за файлами, также известный как MFS.)

The Regular API
.add(data, [options]) - Import a file or data into IPFS.

.addAll(source, [options]) - Import multiple files and data into IPFS.

.cat(ipfsPath, [options]) - Returns a file addressed by a valid IPFS Path.

.get(ipfsPath, [options]) - Fetch a file or an entire directory tree from IPFS that is addressed by a valid IPFS Path.

ls(ipfsPath) - Lists a directory from IPFS that is addressed by a valid IPFS Path.

The Mutable Files API 
.files.chmod(path, mode, [options]) - Change mode for files and directories.

.files.cp(...from, to, [options]) - Copy files from one location to another.

.files.mkdir(path, [options]) - Make a directory in your MFS.

.files.stat(path, [options]) - Get file or directory statistics.

.files.touch(path, [options]) - Update the mtime of a file or directory.

.files.read(path, [options]) - Read a file

.files.write(path, content, [options]) -Write to an MFS path.

.files.mv(...from, to, [options]) -Move files from one location to another.

.files.flush(path, [options]) -Flush a given path's data to the disk.

.files.ls(path, [options]) - List directories in the local mutable namespace