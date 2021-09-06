const express = require('express');
const path = require('path');
const AWS = require('aws-sdk');
const fs = require('fs');
const multer = require('multer');
const multerS3 = require('multer-s3');
const dotenv = require('dotenv');

dotenv.config({path: __dirname + '\\' + '.env'});
const router = express.Router();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
}); 

const storage = multerS3({
    s3: s3,
    bucket:'onegonode',
    acl:'public-read-write',
    ContentType:'image/png',
    key: function(req,file,cb){
        // const ext = path.extname(file.origianalname);
        cb(null, `${req.body.UID}/${Date.now()}_${file.originalname}`);
    },
});
const upload = multer({
    storage: storage
});

router.get('/', function(req, res, next) {
    res.send("aws라우터")
  });


router.post('/test', upload.single('img'), (req,res,next)=>{
    console.log(req.body.UID+','+req.body.img);
    let imgFile = req.file;
    let UID = req.body.UID;
    res.redirect(`../model/test/${UID}`);
});


module.exports = router;