const express = require("express");
const bodyParser = require("body-parser");
const { ApolloServer, gql } = require("apollo-server-express");
const schema = require("./schema");
const resolvers = require("./resolver");

const PORT = 3000;

const app = express();

const graphqlServer = new ApolloServer({
  typeDefs: schema,
  resolvers
});

graphqlServer.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
  )
);
