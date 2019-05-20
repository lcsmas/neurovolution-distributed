const express = require('express');
const uuidv1 = require('uuid/v1');
const cassandra = require('cassandra-driver');
const client = new cassandra.Client(
    { contactPoints: ['localhost'], 
    localDataCenter: 'DC1',
    keyspace: 'neuro' 
    });
const router = express.Router();
const table = "network";

// const bucket = [
//     'bdcb02f6-791e-11e9-8f9e-2a86e4085a59',
//     'bdcb0594-791e-11e9-8f9e-2a86e4085a59',
//     'bdcb0828-791e-11e9-8f9e-2a86e4085a59',
//     'bdcb0968-791e-11e9-8f9e-2a86e4085a59',
//     'bdcb0a9e-791e-11e9-8f9e-2a86e4085a59'
// ];

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }

router.get('/uuid', (req, res) => {
    const uuid = uuidv1();
    res.status(200).send(uuid);
})

router.get('/count', (req, res) => {
    let countStatement = 'SELECT COUNT(*) FROM network';
    client.execute(countStatement, function (err, result) {
        if (err) {
            res.sendStatus(500);
            return console.error(err);
        }
        res.status(200).send(result.rows[0]);
    });
})

router.post('/', (req, res) => {
    let insertDatas = {};
    //insertDatas['bucket']=bucket[getRandomInt(bucket.length)];
    
    insertDatas['network_id']=req.body.network_id;
    insertDatas['score']=req.body.score;
    insertDatas['layers']=req.body.layers;

    const insertStatement = `INSERT INTO network JSON '${JSON.stringify(insertDatas)}'`;

    client.execute(insertStatement, function (err, result) {
        if (err) {
            res.sendStatus(500);
            return console.error(err);
        }
        res.sendStatus(200);
        console.log(insertStatement+ '\n');
      });
})

router.get('/top/:k', (req, res) => {
    //  Dealing with top-k function with Cassandra is a complicated process.
    //  Cassandra is powerfull for handling lot of writing request.
    //  The drawback is that Cassandra isn't made for reading complex queries.
    //  Elasticsearch is a perfect candidate for reading data with complex queries.
    //  That's why Cassandra + Elasticsearch is a very powerfull combination
    //  We are using appriopriate tools for appropriate purposes.
    //  Elasticsearch is also distributed in Cassandra nodes (using Elassandra) -> Resilience and Scalability
    //  We are putting elasticsearchSecondIndexes on Cassandra table.
    //  This way, we are avoiding storing data on Elasticsearch, and we are only indexes (the power of ES)
    //  We can add Elasticsearch query to CQL by using a custom Elasticsearch CQL Handler
    //  This means load balancing is handled by CQL.

    //  Elasticsearch query string
    const esQuery = '{ "sort" : { "score" : { "order" : "desc" } } }';

    // The full top-k statement 
    const topkStatement = `SELECT network_id, score, layers
    FROM ${table} 
    WHERE es_query = '${esQuery}'
    LIMIT ${req.params.k}`
    client.execute(topkStatement, function (err, result) {
        if (err) {
            res.sendStatus(500);
            return console.error(err);
        }
        res.status(200).json(result.rows);
        console.log(topkStatement + '\n');
      });
});

module.exports = router;