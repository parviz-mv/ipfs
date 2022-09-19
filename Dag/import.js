import * as IPFS from 'ipfs';
import fs from "fs";

const ipfs = await IPFS.create();


for await (const result of ipfs.dag.import(fs.createReadStream('../dag-export/example.car'))) {
    console.info(result)
    // Qmfoo
}