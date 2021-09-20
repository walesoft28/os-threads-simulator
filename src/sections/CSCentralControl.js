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
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { CriticalSectionContext } from "../context/CriticalSectionContext";
import { useSnackbar } from "notistack";
import RefreshIcon from "@material-ui/icons/Refresh";
import TourGuide from "../Tour/Tour";

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

function CSCentralControl() {
  const [numberOfThreads, setNumberOfThreads] = useState("");
  const [paused, setPaused] = useState(false);
  const [threadNum, setThreadNum] = useState("");

  const classes = useStyles();

  const THREAD = useContext(CriticalSectionContext);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // HANDLE THREAD CREATION
  const handleThreadCreateClick = () => {
    if (numberOfThreads !== "") {
      THREAD.setSimulating(true);
      setThreadNum(numberOfThreads);
      setNumberOfThreads("");
      THREAD.createThread(numberOfThreads);
      enqueueSnackbar(`${numberOfThreads} Threads Created!`, {
        variant: "success",
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

  // HANDLE THREAD TERMINATION
  const handleThreadTermination = () => {
    if (THREAD.simulating) {
      const confirm = window.confirm(
        "Clicking OK will TERMINATE ALL THREADS and end this round of Simulation. If this is not what you want, Click CANCEL"
      );
      if (confirm) {
        THREAD.createThread("");
        THREAD.setExecutingThread([]);
        enqueueSnackbar(`All Threads Terminated, Begin a fresh simulation`, {
          variant: "info",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
        });
        THREAD.setSimulating(false);
        setNumberOfThreads("");
      }
    } else {
      enqueueSnackbar(
        `You cannot terminate what doesn't exist. You should create threads first! `,
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

  // UI RENDERED
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="column"
        className="central-control"
      >
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
                disabled={THREAD.simulating}
              >
                Create
              </Button>
            </Grid>
          </div>
        </Grid>
        <Grid item container spacing={2}>
          <div className={classes.section}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="secondary"
                size="medium"
                endIcon={<HighlightOffIcon />}
                onClick={handleThreadTermination}
              >
                End Simulation
              </Button>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CSCentralControl;
