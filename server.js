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

app.get('/createUser', (request, response) => {
  console.log(request.params, response);

  const client = new MongoClient(uri, { useUnifiedTopology: true });

  async function run() {
    try {
      await client.connect();

      //create Document
      const booksCollection = client.db("development").collection("aguser");
      const booksDocument = {
          name: "Java Programming",
          price: 30000,
          loc: [ "Seoul City Hall", "Gangnam" ],
        };
      const result = await booksCollection.insertOne(booksDocument);
      console.log(result);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
})