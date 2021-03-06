require('dotenv').config();
const express = require('express');
const models = require('./models');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();
const { MONGO_CREDENTIALS } = process.env;

const MONGO_URI = `mongodb+srv://${MONGO_CREDENTIALS}@cluster0.c8rskeu.mongodb.net/?retryWrites=true&w=majority`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', (error) => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;
