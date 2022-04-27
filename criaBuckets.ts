import {CreateBucketCommand} from "@aws-sdk/client-s3";
import {s3Client} from "./S3Client";

export async function criaBucket(bucketName: string) {
  // Create an Amazon S3 bucket.
  try {
    const data = await s3Client.send(
      new CreateBucketCommand({Bucket: bucketName})
    );
    console.log(data);
    console.log("Successfully created a bucket called ", data.Location);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
}
