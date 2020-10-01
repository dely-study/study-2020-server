const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const schema = require('./src/graphql/schemas');
console.log(schema);

const app = express();

const server = new ApolloServer({
  schema,
});

server.applyMiddleware({ app });

app.listen(3000, () => console.log('server listening'));
