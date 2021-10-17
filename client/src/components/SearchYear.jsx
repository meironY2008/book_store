import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";
const SearchYear = ({year, setUnder, under, setYear }) => {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setYear(Number(event.target.value) || "");
  };
  const handleChangeUnder = (event) => {
    setUnder(!under);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  return (
    <div>
      <Button
        onClick={handleClickOpen}
        style={{ color: "#233489", marginRight: "75vw" }}
      >
        Select Year
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select Year</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ display: "flex", flexWrap: "wrap", minWidth: "200px" }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Year</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={year}
                onChange={handleChange}
                input={<OutlinedInput label="Year" />}
              >
                {new Array(100).fill().map((_, i) => (
                  <MenuItem value={2022 - i}>{2022 - i}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
      {under ? (
        <IconButton onClick={handleChangeUnder}>
          <ArrowDownwardIcon />
        </IconButton>
      ) : (
        <IconButton onClick={handleChangeUnder}>
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </div>
  );
};

export default SearchYear;
