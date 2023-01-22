const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: (offset,limit) => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    address: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    lastElement: {type: GraphQLBoolean}
  }),
});

module.exports = UserType;