const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/feedback', (req, res) => {
    pool.query('SELECT * FROM "feedback";').then((result) => {
        console.log('router get in router')
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500);  
    });
})


module.exports = router;

