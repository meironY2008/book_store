const mongoose = require("mongoose");

//  mongoose.set("useFindAndModify", false);

const url = process.env.MONGO_URI;

// console.log("connecting to", url);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const booksSchema = new mongoose.Schema({
  author: String,
  name: String,
  price: Number,
  year: Number,
  image: String,
  amount: Number,
  description: String,
  grade: Number,
  language: String,
  publishing: String,
});

booksSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Book", booksSchema);
