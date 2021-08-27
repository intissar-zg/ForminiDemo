const mongoose = require("mongoose");
const schema = mongoose.Schema();
const courseSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Content: {
      type: String,
      required: true,
    },
    categorie: { 
      type: mongoose.Types.ObjectId,
      ref: "categorie" },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("course", courseSchema);
