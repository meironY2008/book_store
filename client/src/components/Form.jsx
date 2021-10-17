import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const Form = ({ book, fetchBook, handleClose }) => {
  const [name, setName] = useState(book ? book.name : "");
  const [image, setImage] = useState(book ? book.image : "");
  const [author, setAuthor] = useState(book ? book.author : "");
  const [description, setDescription] = useState(book ? book.description : "");
  const [amount, setAmount] = useState(book ? book.amount : "");
  const [grade, setGrade] = useState(book ? book.grade : "");
  const [year, setYear] = useState(book ? book.year : "");
  const [price, setPrice] = useState(book ? book.price : "");
  const [language, setLanguage] = useState(book ? book.language : "");
  const [publishing, setPublishing] = useState(book ? book.publishing : "");
  return (
    <div>
      <DialogContent>
        <Box
          component="form"
          sx={{ display: "flex", flexWrap: "wrap", minWidth: "250px" }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Name"
                name="Name"
                label="Name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="author"
                name="author"
                label="author"
                fullWidth
                variant="standard"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="grade"
                name="grade"
                label="grade"
                fullWidth
                variant="standard"
                onChange={(e) => setGrade(e.target.value)}
                value={grade}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="language"
                name="language"
                label="language"
                fullWidth
                variant="standard"
                onChange={(e) => setLanguage(e.target.value)}
                value={language}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="image"
                name="image"
                label="image url"
                fullWidth
                variant="standard"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="price"
                name="price"
                label="Price"
                fullWidth
                variant="standard"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="amount "
                name="amount"
                label="Amount"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="publishing"
                name="publishing"
                label="publishing"
                fullWidth
                variant="standard"
                onChange={(e) => setPublishing(e.target.value)}
                value={publishing}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="year"
                name="year"
                label="year"
                fullWidth
                variant="standard"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="description"
                name="description"
                label="description"
                fullWidth
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                variant="standard"
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() =>
            fetchBook({
              author,
              name,
              description,
              year,
              publishing,
              amount,
              price,
              grade,
              image,
              language,
            })
          }
        >
          Ok
        </Button>
      </DialogActions>
    </div>
  );
};

export default Form;
