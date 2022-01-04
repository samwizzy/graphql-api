const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
require("./models/connect");
const { ApolloServer } = require("apollo-server-express");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

async function startApolloServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startApolloServer();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
