const express = require('express');
const path = require('path');
const AWS = require('aws-sdk');
const fs = require('fs');
const multer = require('multer');
const multerS3 = require('multer-s3');
const dotenv = require('dotenv');
const {spawn} = require('child_process');

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
        cb(null, `${req.body.UID}/${file.originalname}`);
    },
});
const upload = multer({
    storage: storage
});

router.get('/', function(req, res, next) {
    res.send("aws라우터")
  });

const redirectRoute = (res,url)=>{
    res.redirect(url)
}
router.post('/upload_img', upload.single('img'), async (req,res,next)=>{
    console.log(req.body.UID+','+req.body.img);
    let imgFile = req.file;
    let UID = req.body.UID;
    await redirectRoute(res,`../model/test/${UID}`)
});

router.get('/download_txt/:uid',(req,res,next)=>{
    const UID = req.params.uid
    const params = {
        Bucket:'onegonode',
        Key:`${UID}/before_onego.txt`
    };
    const file = fs.createWriteStream('./utils/before_onego.txt');
    s3.getObject(params).createReadStream().pipe(file);
    
    // spawn('python3',['C:/Users/judyi/Desktop/class/Kobot/ONEGO_project/onego_server/ONEGO/utils/sign_of_correction.py']);
    res.send('python');
})

module.exports = router;