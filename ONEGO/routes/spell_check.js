const express = require('express');

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('spell router');
});


module.exports = router;