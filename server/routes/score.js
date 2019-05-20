const express = require('express');
const router = express.Router();
const cassandra = require('cassandra-driver');
const client = new cassandra.Client(
    { contactPoints: ['localhost'], 
    localDataCenter: 'DC1',
    keyspace: 'neuro' 
    });
const table = 'network';

router.get('/top/:k', (req, res) => {
    const esQuery = '{ "sort" : { "score" : { "order" : "desc" } } }';

    // The full top-k statement 
    const topkStatement = `SELECT score
    FROM ${table} 
    WHERE es_query = '${esQuery}'
    LIMIT ${req.params.k}`
    client.execute(topkStatement, function (err, result) {
        if (err) {
            res.sendStatus(500);
            return console.error(err);
        }
        res.status(200).send(result.rows);
        console.log(topkStatement + '\n');
      });
})

module.exports = router;