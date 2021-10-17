import { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  Typography,
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import CardMedia from "@mui/material/CardMedia";
import Form from "./Form";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    margin: "10px 0px",
    background: "#e9e9e9",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
    backgroundColor: "#233465",
    borderBottom: `2px solid #000000`,
    color: "#ffffff",
    alignItems: "center",
  },
  expand: {
    transform: "rotate(0deg)",
    marginRight: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(-90deg)",
  },
  scroller: {
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      borderRadius: 10,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#233465",
      borderRadius: 10,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#233489",
    },
  },
  moreContent: {
    overflowWrap: "break-word",
    overflow: "auto",
    fontSize: 14,
    textAlign: "left",
    maxWidth: 275,
    maxHeight: "100px",
  },
}));

function BookCard(props) {
  const {
    author,
    name,
    description,
    year,
    publishing,
    amount,
    price,
    id,
    grade,
    image,
    language,
    setBooks,
  } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const updateBook = async (updateBookValues) => {
    console.log(updateBookValues);
    const { data } = await axios.put(
      `http://localhost:8080/books/update/${id}`,
      {
        name: updateBookValues.name,
        image: updateBookValues.image,
        price: updateBookValues.price,
        language: updateBookValues.language,
        grade: updateBookValues.grade,
        year: updateBookValues.year,
        author: updateBookValues.author,
        description: updateBookValues.description,
        amount: updateBookValues.amount,
        publishing: updateBookValues.publishing,
      }
    );
    // console.log(data);
    setBooks(data);
    handleClose()
  };

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <Grid
          container
          justify="flex-end"
          style={{ backgroundColor: "#233465" }}
        >
          <Grid item>
            <IconButton
              sx={{ p: "2px" }}
              aria-label="edit"
              onClick={handleClickOpen}
            >
              <EditIcon style={{ color: "#ffffff" }} />
            </IconButton>
          </Grid>
        </Grid>

        <Typography
          component="h3"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
        <Grid container justify="space-around">
          <Grid item>
            <Grid
              container
              justify="space-around"
              direction="column"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography variant="caption">Author: {author}</Typography>
              </Grid>
              <Grid item>
                <Typography component="div" variant="caption">
                  Price: {price} $
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" variant="caption">
                  Amount: {amount} pcs
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  Publishing: {publishing}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption">Year: {year}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption"> Language: {language}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Divider sx={{ height: 130, m: 0.5 }} orientation="vertical" />
          </Grid>
          <Grid item>
            <CardMedia
              component="img"
              height="120"
              style={{ borderRadius: "10px" }}
              image={image}
              // alt={name}
            />
          </Grid>
        </Grid>
        <CardActions disableSpacing>
          <Grid container justify="space-around" alignItems="center">
            <Grid item>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography component="p" className={classes.moreContent}>
                {description.length > 25
                  ? description.slice(0, 20) + "..."
                  : "Expand to see content"}
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.moreContent}>
            {description.split("\n").map((line, index) => (
              <Typography
                key={line.split(" ")[0] + index}
                component="div"
                className={`${classes.moreContent} ${classes.scroller}`}
              >
                {line}
              </Typography>
            ))}
            <Typography className={classes.moreContent} component="div">
              Grade:{grade}/10
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Edit book</DialogTitle>
        <Form
          book={{
            author,
            name,
            description,
            year,
            publishing,
            amount,
            price,
            id,
            grade,
            image,
            language,
          }}
          fetchBook={updateBook}
          handleClose={handleClose}
        />
      </Dialog>
    </div>
  );
}

export default BookCard;
