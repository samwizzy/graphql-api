const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Article {
    id: ID
    title: String
    description: String
    likes: Int
    deleted: Boolean
  }

  type Query {
    hello: String
    getArticles: [Article]
    getArticle(id: ID): Article
  }

  input ArticleInput {
    title: String
    description: String
  }

  type Mutation {
    createArticle(article: ArticleInput): Article
    updateArticle(id: ID, article: ArticleInput): Article
    deleteArticle(id: ID): String
  }
`;

module.exports = typeDefs;
