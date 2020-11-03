import { ApolloServer, gql } from "apollo-server-micro";

let behavior = {
    id: 1, 
    name: "Doing Homework", 
    point: 50
}
   
;

const typeDefs = gql`
  type Behavior {
    id: ID
    name: String
    point: Int
  }
  type Query {
    behavior: Behavior
  }
  type Mutation {
    updateBehavior(id: ID!, name: String!, point: Int!): Behavior
  }
`;

const resolvers = {
  Query: {
    behavior: () => behavior,
  },

  Mutation: {
    updateBehavior: (root, args) => {
        behavior.id = args.id;
        behavior.name = args.name;
        behavior.point = args.point;
      return behavior;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;