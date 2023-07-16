const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/feedback', (req, res) => {
  pool
    .query('SELECT * FROM "feedback";')
    .then(result => {
      console.log('router get in router');
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error getting feedback', error);
      res.sendStatus(500);
    });
});

router.post('/feedback', (req, res) => {
  const { feeling, understanding, support, comments, flagged } = req.body;
  const date = new Date();

  pool
    .query(
      `INSERT INTO "feedback" ("id", "feeling", "understanding", "support", "comments", "flagged", "date")
      VALUES (DEFAULT, $1, $2, $3, $4, $5, $6)
      RETURNING id;`,
      [feeling, understanding, support, comments, flagged, date]
    )
    .then(result => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('Error in feedback post in router:', err);
      res.sendStatus(500);
    });
});

module.exports = router;
