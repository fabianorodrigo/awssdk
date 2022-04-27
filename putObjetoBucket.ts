import {PutObjectCommand} from "@aws-sdk/client-s3";
import {s3Client} from "./S3Client";

/**
 * Faz upload de objeto para determinado bucket
 * @param Bucket  The name of the bucket. For example, 'sample_bucket_101'.
 * @param Key The name of the object. For example, 'sample_upload.txt'.
 * @param Body The content of the object. For example, 'Hello world!".
 * @returns
 */
export async function putObjetoBucket(obj: {
  Bucket: string;
  Key: string;
  Body: string;
}) {
  // Create an object and upload it to the Amazon S3 bucket.
  try {
    const results = await s3Client.send(new PutObjectCommand(obj));
    console.log(
      "Successfully created " +
        obj.Key +
        " and uploaded it to " +
        obj.Bucket +
        "/" +
        obj.Key
    );
    return results; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
}
