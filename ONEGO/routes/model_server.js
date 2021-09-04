const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('model라우터');
})


router.get('/test/:uid', function (req, res, next) {
    let UID = req.params.uid
    const testAPI = (callback)=>{ 
        const options = {
            method: 'GET',
            uri: `http://127.0.0.1:5000/test?uid=${UID}`,
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
        let stringData = JSON.stringify(result);
        res.send({
            message: "from flask",
            status: "success",
            data: stringData    
        });
    })

});

module.exports = router;