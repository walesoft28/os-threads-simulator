import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

function SingleThread({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

export default SingleThread;

// Appbar background: #030719
