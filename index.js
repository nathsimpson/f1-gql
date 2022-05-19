import express from "express";
import { ApolloServer } from "apollo-server-express";
import { RESTDataSource } from "apollo-datasource-rest";

// LIB
import { resolvers } from "./resolvers";
import { typeDefs } from "./typedefs";

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
  console.log(`🏎  F1-GQL Server ready at port 4000`);
  console.log(`🏎  http://localhost:4000${apollo.graphqlPath}`);
});
