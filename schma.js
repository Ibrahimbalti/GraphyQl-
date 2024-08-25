import { gql } from "apollo-server";

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

export default typeDefs;
