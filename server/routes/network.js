const express = require('express');
const uuidv1 = require('uuid/v1');
const cassandra = require('cassandra-driver');
const client = new cassandra.Client(
    { contactPoints: ['localhost'], 
    localDataCenter: 'datacenter1',
    keyspace: 'neuro' 
    });
const router = express.Router();

const bucket = [
    'bdcb02f6-791e-11e9-8f9e-2a86e4085a59',
    'bdcb0594-791e-11e9-8f9e-2a86e4085a59',
    'bdcb0828-791e-11e9-8f9e-2a86e4085a59',
    'bdcb0968-791e-11e9-8f9e-2a86e4085a59',
    'bdcb0a9e-791e-11e9-8f9e-2a86e4085a59'
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

router.post('/', (req, res) => {
    let insertDatas = {};
    insertDatas['bucket']=bucket[getRandomInt(bucket.length)];
    insertDatas['score']=req.body.score;
    insertDatas['layers']=req.body.layers;

    const insertStatement = `INSERT INTO network JSON '${JSON.stringify(insertDatas)}'`;

    client.execute(insertStatement, function (err, result) {
        if (err) {
            res.sendStatus(500);
            return console.error(err);
        }
        res.sendStatus(200);
        console.log(insertDatas);
      });
})

module.exports = router;