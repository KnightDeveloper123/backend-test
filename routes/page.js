var express = require('express');
var router = express.Router();

router.get('/test', (req, res)=>{
    res.json({message:"Hello is message, and you have deployed APIs"})
})

module.exports = router;