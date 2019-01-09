const express = require('express');
const router = express.Router();

router.get('/data',(req,res,next)=>{
    res.send('Retrieving data');
});

router.post('/add',(req,res,next)=>{
    res.send('Adding d');
});

router.delete('/delete/:id',(req,res,next)=>{
    res.send('Deleting data');
});
module.exports = router;