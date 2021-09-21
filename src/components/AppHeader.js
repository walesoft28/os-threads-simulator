import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "16px",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppHeader() {
  const classes = useStyles();
  console.log(useHistory());
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              OS THREADS SIMULATOR
            </Link>
          </Typography>
          <Link
            to="/threads"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Threads</Button>
          </Link>
          <Link
            className="critical-section-page"
            to="/critical-section-problem"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Critical-Section-Problem</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
