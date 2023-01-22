const express = require('express');
const graphql = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const schema = require("./Schema/index");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))