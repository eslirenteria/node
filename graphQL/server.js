const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Root resolver
const root = {
  message: () => 'Hello World'
};

// Create an express server and a GraphQL endpoint
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL runninin on localhost:4000/graphql on port 4000'));
