import {ListBucketsCommand} from "@aws-sdk/client-s3";
import {s3Client} from "./S3Client";

export async function listaBuckets() {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    return data;
  } catch (err) {
    console.log("Error", err);
  }
}
