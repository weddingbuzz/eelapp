import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import dotenv from "dotenv";
dotenv.config();

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

var upload_dir =
    "school-393" + "/" + new Date().getFullYear() + "/" + "assignment/submitted/";

const uploadS3 = multer({
    storage: multerS3({
        s3: s3,
        acl: "public-read",
        bucket: process.env.AWS_BUCKET,
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            cb(null, upload_dir + Date.now().toString() + "-" + file.originalname);
        },
    }),
});

export default uploadS3;
