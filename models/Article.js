const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    likes: { type: Number, default: 0 },
    deleted: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);
