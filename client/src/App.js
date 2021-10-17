import { useState, useEffect } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Search from "./components/Search";
import BookCard from "./components/BookCard";
import { Container, Grid } from "@material-ui/core";
function App() {
  const [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <div>
      <TopBar />
      <Search setBooks={setBooks} />
      <Container maxWidth="md" style={{height:"50vh"}}>
        <div className="App">
          <Grid container spacing={4} justify="center">
            {books.length > 0 &&
              books.map((book, index) => (
                <Grid key={`book${index}`} item>
                  <BookCard
                    name={book.name}
                    author={book.author}
                    description={book.description}
                    year={book.year}
                    grade={book.grade}
                    price={book.price}
                    image={book.image}
                    language={book.language}
                    publishing={book.publishing}
                    id={book.id}
                    amount={book.amount}
                    setBooks={setBooks}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
