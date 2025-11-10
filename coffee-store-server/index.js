const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const {MongoClient, ServerApiVersion} = require("mongodb");
require("dotenv").config();

// MIDDLEWARE

app.use(cors());
app.use(express.json());

const DB_USER = process.env.DB_USER;
const PASSWORD = process.env.PASSWORD;

const uri = `mongodb+srv://${DB_USER}:${PASSWORD}@cluster0.p6yi1.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    const coffeeCollection = client.db("coffeeDB").collection("coffee");
    const userCollection = client.db('coffeeDB').collection('Users')


    app.get('/coffee', async (req, res) => {
      const cursor = coffeeCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })


    app.post("/coffee", async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    });

    // send users to the server 

    app.post('/users', async(req, res) => {
      const users = req.body;
      console.log(users);
      const result = await userCollection.insertOne(users);
      console.log(result);
      
      res.send(result)
    })



    await client.db("admin").command({ping: 1});
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Coffee Server Is Running.");
});

app.listen(port, () => {
  console.log(`Coffee Server is Running On PORT: ${port}`);
});
