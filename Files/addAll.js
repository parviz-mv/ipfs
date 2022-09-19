import * as IPFS from "ipfs";

const ipfs = await IPFS.create();

const files = [{
      path: './resume.pdf',
      content: 'ABC'
    }]
    
    for await (const result of ipfs.addAll(files)) {
      console.log(result)
    }
    
    /*
    Prints out objects like:
    
    {
      "path": "tmp",
      "cid": CID("QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg"),
      "mode": 493,
      "mtime": { secs: Number, nsecs: Number },
      "size": 67
    }
    
    {
      "path": "/tmp/myfile.txt",
      "cid": CID("QmNz1UBzpdd4HfZ3qir3aPiRdX5a93XwTuDNyXRc6PKhWW"),
      "mode": 420,
      "mtime": { secs: Number, nsecs: Number },
      "size": 11
    }
    */