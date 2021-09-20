import React, { useContext } from "react";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import HotelIcon from "@material-ui/icons/Hotel";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { ThreadContext } from "../context/ThreadContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "red",
    height: "200px",
  },
  threadInstance: {
    height: "10px",
    backgroundColor: "green",
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "green",
  },
}));

function SingleThreadControl({ threadNo, children }) {
  const { runThread, sleepThread, killThread } = useContext(ThreadContext);

  const handleThreadRun = (id) => {
    console.log(`Running T${id}`);
    runThread(id);
  };

  const handleThreadSleep = (id) => {
    console.log(`Sleeping T${id}`);
    sleepThread(id);
  };

  const handleThreadTermination = (id) => {
    console.log(`Killing T${id}`);
    killThread(id);
  };

  return (
    <Grid item xs={12} container justifyContent="space-evenly">
      {children}
      <Divider orientation="vertical" flexItem />
      <Button
        variant="outlined"
        color="primary"
        endIcon={<DirectionsRunIcon />}
        size="small"
        onClick={() => handleThreadRun(threadNo)}
      >
        Run
      </Button>
      <Button
        variant="outlined"
        color="primary"
        endIcon={<HotelIcon />}
        size="small"
        onClick={() => handleThreadSleep(threadNo)}
      >
        Sleep
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        endIcon={<DeleteForeverIcon />}
        size="small"
        onClick={() => handleThreadTermination(threadNo)}
      >
        Kill
      </Button>
    </Grid>
  );
}

export default SingleThreadControl;
