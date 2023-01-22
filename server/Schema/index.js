const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const userData = require("../Data/fakeUserData");

const UserType = require("./TypeDefs/UserType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { offset : { type: GraphQLInt},limit: { type: GraphQLInt } },
      resolve(parent, {offset, limit}) {
        return userData.slice(offset, offset+limit);
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery});