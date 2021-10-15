import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SearchName from "./SearchName";
import SearchMenu from "./SearchMenu";
import SearchYears from "./SerchYears";
const Search = () => {
  const [searchType, setSearchType] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [firstYear, setFirstYear] = React.useState(0);
  const [secondYear, setSecondYear] = React.useState(0);
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "99vw",
        marginTop: 15,
      }}
    >
      <SearchMenu setSearchType={setSearchType} />

      {searchType == 1 && <SearchName setSearchName={setSearchName}/>}
      {searchType == 3 && <SearchYears firstYear={firstYear} setFirstYear={setFirstYear} secondYear={secondYear} setSecondYear={setSecondYear}/>}

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
