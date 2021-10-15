import React from "react";
import InputBase from "@mui/material/InputBase";
const SearchName = ({ setSearchName }) => {
  const handleChange = (e) => {
    setSearchName(e.target.value);
  };
  return (
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search Book by Name"
      inputProps={{ "aria-label": "search book" }}
      style={{ color: "#233489" }}
      onChange={handleChange}
    />
  );
};

export default SearchName;
