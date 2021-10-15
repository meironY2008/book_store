const express = require("express");
const Book = require("./models/books");

const app = express();
app.use(express.json());
app.post("/books", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedNewBook = await newBook.save();
    return res.status(201).json(savedNewBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "An Error Occurred" });
  }
});

app.get("/books/year", async (req, res) => {
    try {
      const { secondYear, under,year } = req.body;
      if (!secondYear) {
        if (!under) {
          const booksByYear = await Book.find({
            year: { $gte: year },
          });
          if (booksByYear.length > 0) {
            return res.status(200).json(booksByYear);
          }
          return res.status(404).json({ message: "not exist" });
        } else {
          const booksByYear = await Book.find({
            year: { $lte: year },
          });
          if (booksByYear.length > 0) {
            return res.status(200).json(booksByYear);
          }
          return res.status(404).json({ message: "not exist" });
        }
      } else {
        const booksByYear = await Book.find({
          $and: [
            { year: { $lte: secondYear } },
            { year: { $gte: year } },
          ],
        });
        if (booksByYear.length > 0) {
          return res.status(200).json(booksByYear);
        }
        return res.status(404).json({ message: "not exist" });
      }
    } catch (err) {
      return res.status(500).json({ message: "An Error Occurred" });
    }
  });

app.get("/books/:name", async (req, res) => {
  try {
    console.log(req.params.name);

    const myBook = await Book.findOne({ name: req.params.name });
    console.log("h2");
    console.log(myBook);
    if (!myBook) return res.status(404).json({ message: "not exist" });
    return res.status(200).json(myBook);
  } catch (err) {
    console.log("h3");
    return res.status(500).json({ message: "An Error Occurred" });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    if (!updatedBook) return res.status(404).json({ message: "not exist" });
    return res.status(200).json(updatedBook);
  } catch (err) {
    return res.status(500).json({ message: "An Error Occurred" });
  }
});



module.exports = app;
