var express = require('express');
var router = express.Router();
const connection = require('../db')

router.get('/test', (req, res)=>{
    res.json({message:"This is Test API"})
})

router.get('/hello', (req, res)=>{
    res.json({message:"This is hello API"})
})

router.get('/database',async (req, res)=>{
    console.log('/database hitted');
    const result = await connection.query('select * from test')
    const data = result.rows
    res.json({data})
})

module.exports = router;