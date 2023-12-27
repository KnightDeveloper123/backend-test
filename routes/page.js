var express = require('express');
var router = express.Router();

router.get('/test', (req, res)=>{
    res.json({message:"This is Test API"})
})

router.get('/hello', (req, res)=>{
    res.json({message:"This is hello API"})
})

module.exports = router;