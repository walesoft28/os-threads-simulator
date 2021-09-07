import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

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
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
  },
}));

function SingleThreadBlock({ children }) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid
        item
        xs={12}
        justifyContent="space-between"
        alignItems="center"
        container
      >
        <Grid item xs={1}>
          {children[0]}
        </Grid>

        <Grid item xs={11}>
          {children[1]}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default SingleThreadBlock;
