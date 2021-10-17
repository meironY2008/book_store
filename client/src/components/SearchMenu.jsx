import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Form from "./Form";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function SearchMenu({ handleChangeType, setBooks }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openAdd, setOpenAdd] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handeleClickAddBook = (e) => {
    handleClose(e);
    setOpenAdd(true);
  };
  const handleClose = (e) => {
    handleChangeType(e.target.value ? e.target.value : 1);
    setAnchorEl(null);
  };
  const handleCloseAdd = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenAdd(false);
    }
  };
  const postBook = async (book) => {
    try {
      const { data } = await axios.post(`http://localhost:8080/books`, {
        name: book.name,
        image: book.image,
        price: book.price,
        language: book.language,
        grade: book.grade,
        year: book.year,
        author: book.author,
        description: book.description,
        amount: book.amount,
        publishing: book.publishing,
      });
      setBooks(data);
      handleCloseAdd();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{ backgroundColor: "#233489", borderRadius: "100px" }}
      >
        <MenuIcon />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem value={1} onClick={handleClose} disableRipple>
          <MenuBookIcon />
          Search By Name
        </MenuItem>
        <MenuItem value={2} onClick={handleClose} disableRipple>
          <CalendarTodayIcon />
          Search By Year
        </MenuItem>
        <MenuItem value={3} onClick={handleClose} disableRipple>
          <AccessTimeFilledIcon />
          Search Between Years
        </MenuItem>
        <MenuItem value={1} onClick={handeleClickAddBook} disableRipple>
          <AddCircleIcon />
          Add New Book
        </MenuItem>
      </StyledMenu>
      <Dialog disableEscapeKeyDown open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Add Book</DialogTitle>
        <Form fetchBook={postBook} handleClose={handleCloseAdd} />
      </Dialog>
    </div>
  );
}
