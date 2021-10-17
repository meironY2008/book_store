import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SearchName from "./SearchName";
import SearchMenu from "./SearchMenu";
import SearchYears from "./SerchYears";
import SearchYear from "./SearchYear";
import axios from "axios";
const Search = ({ setBooks }) => {
  const [searchType, setSearchType] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [under, setUnder] = useState(false);
  const [year, setYear] = useState(0);
  const [secondYear, setSecondYear] = useState(0);
  const handleChangeType = (value) => {
    setSearchType(value);
    setSecondYear(0);
    setUnder(false);
    setSearchName("");
    setYear(0);
  };
  const fetchData = async () => {
    try {
      if (searchType == 1) {
        const { data } = await axios.get(
          `http://localhost:8080/books/${searchName}`
        );
        console.log("books", data);
        setBooks(data);
      } else {
        const { data } = await axios.get(
          `http://localhost:8080/books/year/${year}/${under}/${secondYear}`
        );
        setBooks(data);
        setSearchType(1);
        setSecondYear(0);
        setUnder(false);
        setSearchName("");
        setYear(0);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "99vw",
        marginTop: 14.5,
      }}
    >
      <SearchMenu handleChangeType={handleChangeType} setBooks={setBooks} />

      {searchType == 1 && <SearchName setSearchName={setSearchName} />}
      {searchType == 2 && (
        <SearchYear
          year={year}
          setYear={setYear}
          under={under}
          setUnder={setUnder}
        />
      )}
      {searchType == 3 && (
        <SearchYears
          firstYear={year}
          setFirstYear={setYear}
          secondYear={secondYear}
          setSecondYear={setSecondYear}
        />
      )}

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: "10px" }} aria-label="search" onClick={fetchData}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
