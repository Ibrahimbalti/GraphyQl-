import { users, quotes } from "./fakedb.js";

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

export default resolvers;
