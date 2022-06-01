const { ApolloServer } = require("apollo-server");
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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  dataSources: () => ({
    f1API: new F1API(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🏎  Server ready at ${url}`);
});
