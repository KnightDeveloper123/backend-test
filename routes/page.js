var express = require('express');
var router = express.Router();
const connection = require('../db')
const webpush = require('web-push');

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

const publicVapidKey = "BPHcUQEW_OLPLwyiDJuK0POa2hNYClIr7boZHmbOmMjDnrr_NgzmM0_DQJU622sPFTYertotkv1tFmk1lFe7iNc";

const privateVapidKey = "vg-qy-6cyW96Hhxbnj1r97c6_6K6H194jAHYTkyCGyg";

// Setup the public and private VAPID keys to web-push library.
webpush.setVapidDetails("mailto: <thorragnorak241077@gmail.com>", publicVapidKey, privateVapidKey);

// Create route for allow client to subscribe to push notification.
router.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Hello World", body: "This is your first push notification" });

    webpush.sendNotification(subscription, payload).catch(console.log);

    // res.send("hello");
})

module.exports = router;