const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('model라우터');
})


router.get('/test', function (req, res, next) {

    const testAPI = (callback)=>{ 
        const options = {
            method: 'POST',
            uri: "http://127.0.0.1:5000/test",
        }

        request(options, function (err, res, body) {
            console.log(res)
            callback(undefined, {
                result:body
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
        let json = JSON.stringify(result);
        res.send({
            message: "from flask",
            status: "success",
            data: json    
        });
    })

});

module.exports = router;