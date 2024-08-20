import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { users, quotes } from "./fakedb.js";

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID): User
    quotes: [Quotes]
    iquotes(by: ID): [Quotes]
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    quotes: [Quotes]
  }

  type Quotes {
    name: String
    by: ID
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((item) => item.id === id),
    quotes: () => quotes,
    iquotes: (_, { by }) => quotes.filter((q) => q.by === by),
  },

  User: {
    quotes: (ur) => quotes.filter((q) => q.by === ur.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`server is ready ${url}`);
});
