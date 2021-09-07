const express = require('express');
const request = require('request');
// const string = require(String);
const router = express.Router();
const fs = require('fs');
const { type } = require('os');

router.get('/',(req,res)=>{
    res.send('model라우터');
})

// String.prototype.replaceAll = function(org, dest) {
//     return this.split(org).join(dest);
// }

router.get('/test/:uid', function (req, res, next) {
    let UID = req.params.uid
    const testAPI = (callback)=>{ 
        const options = {
            method: 'GET',
            uri: `http://127.0.0.1:5000/file_download?uid=${UID}`,
        }

        request(options, function (err, res, body) {
            console.log('res : '+ res + typeof(res))
            console.log('body : ' + body + typeof(body))
            callback(undefined, {
                result:body,
            });
        });
    }

    testAPI((err, result)=>{
        if(err){
            console.log("error!!!!");
            res.send({
                message: "fail",
                status: "fail"
            });
        }
        let stringData = JSON.stringify(result);
        console.log('result : '+result);
        console.log({
                message: "from flask",
                status: "success", 
                fulldata : stringData,   
            }) 
        if(stringData.includes('complete')){
            res.redirect(`../../aws/download_txt/${UID}`)
        }
        else{
            res.send({
                message: "flask is fail",
                status: "fail"
            });
        }
    })

});


module.exports = router;