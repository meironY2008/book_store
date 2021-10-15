import { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    margin: "10px 0px",
    background: "#e9e9e9",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 17,
    backgroundColor: "#233465",
    borderBottom: `2px solid #000000`,
    color: "#e9e9e9",
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
  const { author, name, description, year } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <Grid container justify="space-around">
        <Grid item>
          <Typography variant="caption">{year}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">Author: {author}</Typography>
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
              <ExpandMoreIcon />
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
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BookCard;
