const Article = require("./models/Article");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getArticles: async () => {
      return Article.find();
    },
    getArticle: async (parent, { id }, context, info) => {
      return Article.findById(id);
    },
  },
  Mutation: {
    createArticle: async (parent, args, context, info) => {
      const { title, description } = args.article;
      const article = new Article({ title, description });
      await article.save();
      return article;
    },
    updateArticle: async (parent, args, context, info) => {
      const updateData = {};
      Object.entries(args.article).map(([key, val]) => {
        if (val !== undefined) {
          updateData[key] = val;
        }
      });
      const article = await Article.findByIdAndUpdate(args.id, updateData, {
        new: true,
      });

      return article;
    },
    deleteArticle: async (parent, { id }, context, info) => {
      await Article.findByIdAndDelete(id);
      return "OK";
    },
  },
};

module.exports = resolvers;
