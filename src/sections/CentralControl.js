import React, { useState, useContext } from "react";
import {
  Grid,
  makeStyles,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { ThreadContext } from "../context/ThreadContext";
import { useSnackbar } from "notistack";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "25px",
  },
  section: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    // width: "100%",
    height: "100%",
  },
  formControl: {
    width: "100%",
  },
}));

function CentralControl() {
  const [numberOfThreads, setNumberOfThreads] = useState("");
  const [paused, setPaused] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [threadNum, setThreadNum] = useState("");

  const classes = useStyles();

  const THREAD = useContext(ThreadContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // HANDLE THREAD CREATION
  const handleThreadCreateClick = () => {
    if (numberOfThreads !== "") {
      setSimulating(true);
      setThreadNum(numberOfThreads);
      setNumberOfThreads("");
      THREAD.createThread(numberOfThreads);
      enqueueSnackbar(`${numberOfThreads} Threads Created and READY to run!`, {
        variant: "info",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else {
      enqueueSnackbar(
        `You have to select the Number of Threads you wish to create first`,
        {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
        }
      );
    }
  };

  // HANDLE THREAD RUNNING
  const handleRunAllClick = () => {
    if (threadNum) {
      console.log(`Time to run!`);
      THREAD.runThread();
      enqueueSnackbar(`Running All ${threadNum} Threads! `, {
        variant: "info",
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      });
      setThreadNum("");
    } else {
      enqueueSnackbar(`You need to create threads first! `, {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
    }
  };

  // HANDLE THREAD TERMINATION
  const handleThreadTermination = () => {
    if (simulating) {
      const confirm = window.confirm(
        "Clicking OK will TERMINATE ALL THREADS and end your Simulation? If this is not what you want, Click CANCEL"
      );
      if (confirm) {
        THREAD.createThread("");
        enqueueSnackbar(
          `All Threads Terminated, click the REFRESH ICON for a fresh simulation`,
          {
            variant: "info",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
          }
        );
        setSimulating(false);
        setNumberOfThreads("");
      }
    } else {
      enqueueSnackbar(
        `You cannot terminate what doesn't exist. You should create a thread first! `,
        {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
        }
      );
    }
  };

  // HANDLE THREAD PAUSE/RESUME
  const handlePauseResumeClick = () => {
    setPaused((prev) => !prev);
    THREAD.pauseSimulation();
  };

  // UI RENDERED
  return (
    <div className={classes.root}>
      <Grid container spacing={4} direction="column">
        <Grid item container alignContent="center" spacing={2}>
          <div className={classes.section}>
            <Grid item xs={7}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  No. of Threads
                </InputLabel>
                <Select
                  labelId="threadNoSelect"
                  id="threadSelect"
                  value={numberOfThreads}
                  onChange={(e) => setNumberOfThreads(e.target.value)}
                  label="No of Threads"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4} style={{ marginLeft: "10px" }}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                classes={{ containedPrimary: classes.button }}
                onClick={handleThreadCreateClick}
              >
                Create
              </Button>
            </Grid>
          </div>
        </Grid>
        <Grid item container spacing={2}>
          <div className={classes.section}>
            <Grid item xs={8}>
              <Button
                variant="outlined"
                color="secondary"
                size="medium"
                endIcon={<DeleteForeverIcon />}
                onClick={handleThreadTermination}
              >
                Terminate All
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                endIcon={<DirectionsRunIcon />}
                classes={{ containedPrimary: classes.button }}
                onClick={handleRunAllClick}
              >
                Run All
              </Button>
            </Grid>
          </div>
        </Grid>
        <Grid item container spacing={2}>
          <div className={classes.section}>
            <Grid item xs={9}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                endIcon={paused ? <PlayArrowIcon /> : <PauseIcon />}
                onClick={handlePauseResumeClick}
              >
                {paused ? "Resume Simulation" : "Pause Simulation"}
              </Button>
            </Grid>

            <Grid item xs={3}>
              <IconButton color="secondary" aria-label="add an alarm">
                <RefreshIcon />
              </IconButton>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CentralControl;
