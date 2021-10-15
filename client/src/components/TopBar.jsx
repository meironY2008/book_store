import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

import { grey, indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#030303",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color:"#000"
  },
  title: {
    width: 350,
    alignSelf: "center",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    margin: "10px 20px",
    color: "#233489",
    fontFamily: "Ephesis",
    fontWeight: "bold",
    fontSize: 70,
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Typography className={classes.title} variant="h4" noWrap>
            My <ImportContactsIcon sx={{ fontSize: 70 }} /> Store
          </Typography>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

export default TopBar;
