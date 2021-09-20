import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { CriticalSectionContext } from "../context/CriticalSectionContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "red",
    height: "200px",
  },
  threadInstance: {
    height: "10px",
    backgroundColor: "green",
  },
  paper: {
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(3),
    width: "50%",
    minWidth: "150px",
  },
  pulse: {
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(3),
    width: "50%",
    minWidth: "150px",
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

function CSSingleThreadBlock({ children, threadID }) {
  const { threads, executingThread } = useContext(CriticalSectionContext);
  const classes = useStyles();

  return (
    <Paper
      className={
        executingThread.length > 0 && threadID === executingThread[0]?.threadID
          ? classes.pulse
          : classes.paper
      }
    >
      <Grid
        item
        xs={12}
        justifyContent="space-between"
        alignItems="center"
        container
      >
        <Grid item xs={4}>
          {children[0]}
        </Grid>

        <Grid item xs={8}>
          {children[1]}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CSSingleThreadBlock;
