import * as React from "react";
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

export default function SearchYears({
  firstYear,
  setFirstYear,
  secondYear,
  setSecondYear,
}) {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSecondYear(Number(event.target.value) || "");
  };
  const handleChangeFirstYear = (event) => {
    setFirstYear(Number(event.target.value) || "");
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
        style={{ color: "#233489", marginRight: "78vw" }}
      >
        Select Years
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select Years</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ display: "flex", flexWrap: "wrap", minWidth: "250px" }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={firstYear}
                onChange={handleChangeFirstYear}
                input={<OutlinedInput label="First Year" />}
              >
                {new Array(100).fill().map((_, i) => (
                  <MenuItem value={2022 - i}>{2022 - i}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {firstYear > 0 && (
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={secondYear}
                  onChange={handleChange}
                  input={<OutlinedInput label="Second Year" />}
                >
                  {new Array(2022 - firstYear).fill().map((_, i) => (
                    <MenuItem value={2022 - i}>{2022 - i}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
