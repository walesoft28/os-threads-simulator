import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import { ThreadContext } from "../context/ThreadContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    "& > *": {
      width: "100%",
      height: "100%",
      textAlign: "center",
      padding: "0px 10px 0px 10px",
    },
  },
  centerPaperContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pulse: {
    background: "#f50057",
    color: "white",
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
    transform: "scale(1)",
    animation: "$pulse 2s infinite",
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.95)",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.7)",
    },
    "70%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 10px rgba(0, 0, 0, 0)",
    },
    "100%": {
      transform: "scale(0.95)",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
    },
  },
}));

function ThreadLifeCycleInstance(props) {
  const { children } = props;
  const { created, running, blocked, terminated } = useContext(ThreadContext);

  const classes = useStyles();

  console.log(running);

  return (
    <Grid item container spacing={2}>
      <Grid item>{children}</Grid>
      <Grid item className={classes.paper}>
        <Paper
          classes={{ root: classes.centerPaperContent }}
          className={created && classes.pulse}
        >
          CREATED
        </Paper>
      </Grid>
      <Grid item className={classes.paper}>
        <Paper
          classes={{ root: classes.centerPaperContent }}
          className={running && classes.pulse}
        >
          RUNNING
        </Paper>
      </Grid>
      <Grid item className={classes.paper}>
        <Paper
          classes={{ root: classes.centerPaperContent }}
          className={blocked && classes.pulse}
        >
          BLOCKED
        </Paper>
      </Grid>
      <Grid item className={classes.paper}>
        <Paper
          classes={{ root: classes.centerPaperContent }}
          className={terminated && classes.pulse}
        >
          TERMINATED
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ThreadLifeCycleInstance;
