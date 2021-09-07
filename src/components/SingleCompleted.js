import React from "react";
import Paper from "@material-ui/core/Paper";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "red",
  },
  paper: {
    padding: theme.spacing(1),
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  grid: {
    backgroundColor: "blue",
  },
  chip: {
    marginRight: theme.spacing(1),
  },
}));

function SingleCompleted({ children }) {
  const classes = useStyles();
  return (
    <Grid item container>
      <Paper className={classes.paper}>
        {children}
        <DoneAllIcon />
      </Paper>
    </Grid>
  );
}

export default SingleCompleted;
