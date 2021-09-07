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
  const {
    progress,
    runOne,
    runTwo,
    runThree,
    runFour,
    runFive,
    runSix,
    runSeven,
    sleepOne,
    sleepTwo,
    sleepThree,
    sleepFour,
    sleepFive,
    sleepSix,
    sleepSeven,
    killOne,
    killTwo,
    killThree,
    killFour,
    killFive,
    killSix,
    killSeven,
  } = useContext(ThreadContext);

  const handleThreadRun = () => {
    if (threadNo === 1) runOne(threadNo);
    else if (threadNo === 2) runTwo(threadNo);
    else if (threadNo === 3) runThree(threadNo);
    else if (threadNo === 4) runFour(threadNo);
    else if (threadNo === 5) runFive(threadNo);
    else if (threadNo === 6) runSix(threadNo);
    else if (threadNo === 7) runSeven(threadNo);
  };

  const handleThreadSleep = () => {
    if (threadNo === 1) sleepOne(threadNo);
    else if (threadNo === 2) sleepTwo(threadNo);
    else if (threadNo === 3) sleepThree(threadNo);
    else if (threadNo === 4) sleepFour(threadNo);
    else if (threadNo === 5) sleepFive(threadNo);
    else if (threadNo === 6) sleepSix(threadNo);
    else if (threadNo === 7) sleepSeven(threadNo);
  };

  const handleThreadTermination = () => {
    if (threadNo === 1) killOne(threadNo);
    else if (threadNo === 2) killTwo(threadNo);
    else if (threadNo === 3) killThree(threadNo);
    else if (threadNo === 4) killFour(threadNo);
    else if (threadNo === 5) killFive(threadNo);
    else if (threadNo === 6) killSix(threadNo);
    else if (threadNo === 7) killSeven(threadNo);
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
        onClick={handleThreadRun}
      >
        Run
      </Button>
      <Button
        variant="outlined"
        color="primary"
        endIcon={<HotelIcon />}
        size="small"
        onClick={handleThreadSleep}
      >
        Sleep
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        endIcon={<DeleteForeverIcon />}
        size="small"
        onClick={handleThreadTermination}
      >
        Kill
      </Button>
    </Grid>
  );
}

export default SingleThreadControl;
