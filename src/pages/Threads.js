import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "../components/SectionHeader";
import CentralControl from "../sections/CentralControl";
import ThreadControl from "../sections/ThreadControl";
import ThreadLifeCycle from "../sections/ThreadLifeCycle";
import Process from "../sections/Process";
import Completed from "../sections/Completed";
import TourGuide from "../Tour/Tour";
import { ThreadSteps } from "../Tour/ThreadTour";
import Draggable from "react-draggable";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      // width: theme.spacing(170),
      minHeight: theme.spacing(30),
      width: "100%",
      height: "100%",
    },
  },
}));

export default function Threads() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TourGuide enabled={true} steps={ThreadSteps} initialStep={0} />
      <Grid container spacing={3} direction="column">
        <Grid item container spacing={2}>
          <Draggable>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              className="thread-central-control"
            >
              <div className={classes.section}>
                <Paper className={classes.paper}>
                  <SectionHeader sectionTitle="CENTRAL CONTROL" />
                  <CentralControl />
                </Paper>
              </div>
            </Grid>
          </Draggable>

          <Draggable>
            <Grid item xs={12} sm={12} md={5} className="thread-life-cycle">
              <div className={classes.section}>
                <Paper className={classes.paper}>
                  <SectionHeader sectionTitle="THREAD LIFE-CYCLE" />
                  <ThreadLifeCycle />
                </Paper>
              </div>
            </Grid>
          </Draggable>

          <Draggable>
            <Grid item xs={12} sm={12} md={4} className="thread-control">
              <div className={classes.section}>
                <Paper className={classes.paper}>
                  <SectionHeader sectionTitle="THREAD CONTROL" />
                  <ThreadControl />
                </Paper>
              </div>
            </Grid>
          </Draggable>
        </Grid>

        <Grid item container spacing={1}>
          <Draggable>
            <Grid item xs={10} className="thread-process">
              <div className={classes.section}>
                <Paper className={classes.paper} elevation={24}>
                  <SectionHeader sectionTitle="PROCESS (MULTI-THREADED)" />
                  <Process />
                </Paper>
              </div>
            </Grid>
          </Draggable>
          <Draggable>
            <Grid item xs={2}>
              <div className={classes.section}>
                <Paper className={classes.paper}>
                  <Completed />
                </Paper>
              </div>
            </Grid>
          </Draggable>
        </Grid>
      </Grid>
    </div>
  );
}
