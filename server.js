const express = require('express');
const app = express();
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:admin@anygym.iehhm.gcp.mongodb.net/anygym?retryWrites=true&w=majority";

app.listen(3355, () => {
  console.log('Server start...', 'http://localhost:3355');
});

// 포트 충돌 방지용
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/trainer_info', (request, response) => {
  MongoClient.connect(uri, (err, client) => {
    client.db('test_mjroh').collection('trainer_info').find({}).toArray((err, docs) => {
      response.json(docs);
      console.log(docs);
      client.close();
    })
  })
})