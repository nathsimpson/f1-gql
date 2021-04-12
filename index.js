const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { RESTDataSource } = require("apollo-datasource-rest");

// LIB
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typedefs");

class F1API extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://ergast.com/api";
  }
}

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    f1API: new F1API(),
  }),
});

const app = express();
apollo.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${apollo.graphqlPath}`);
});
