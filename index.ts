import * as readlineSync from "readline-sync";
import {criaBucket} from "./criaBuckets";
import {listaBuckets} from "./listaBuckets";
import {putObjetoBucket} from "./putObjetoBucket";

let action;

console.log("1. List Buckets");
console.log("2. Create Bucket");
console.log("3. Pub object in bucket");
console.log();
action = readlineSync.question("Choice: ");

handleChoice(action);

async function handleChoice(action: string) {
  if (action === "1") {
    const buckets = await listaBuckets();
    console.log(buckets);
  } else if (action === `2`) {
    const bucketName = readlineSync.question("Bucket name: ");
    criaBucket(bucketName);
  } else if (action === `3`) {
    const Bucket = readlineSync.question("Bucket name: ");
    const Key = readlineSync.question("Object Key: ");
    const Body = readlineSync.question("Object Content: ");
    putObjetoBucket({Bucket, Key, Body});
  } else console.log(`Opção não reconhecida`);
}
