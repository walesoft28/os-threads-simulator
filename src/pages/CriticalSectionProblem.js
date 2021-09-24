import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "../components/SectionHeader";
import CSCentralControl from "../sections/CSCentralControl";
import CSThreadControl from "../sections/CSThreadControl";
import SharedResource from "../sections/SharedResource";
import ThreadState from "../sections/ThreadState";
import CSProcess from "../sections/CSProcess";
import TourGuide from "../Tour/Tour";
import { CriticalSectionSteps } from "../Tour/CriticalSectionTour";
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

export default function CriticalSectionProblem() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TourGuide enabled={true} steps={CriticalSectionSteps} initialStep={0} />
      <Grid container spacing={3} direction="column">
        <Grid item container spacing={2}>
          <Draggable>
            <Grid item xs={12} sm={12} md={3} className="central-control">
              <div className={classes.section}>
                <Paper className={classes.paper}>
                  <SectionHeader sectionTitle="CENTRAL CONTROL" />
                  <CSCentralControl />
                </Paper>
              </div>
            </Grid>
          </Draggable>

          <Draggable>
            <Grid item xs={12} sm={12} md={4} className="critical-section">
              <div className={classes.section}>
                <Paper
                  className={classes.paper}
                  elevation={24}
                  variant="elevation"
                >
                  <SectionHeader sectionTitle="CRITICAL SECTION/SHARED RESOURCE" />
                  <SharedResource />
                </Paper>
              </div>
            </Grid>
          </Draggable>

          <Draggable>
            <Grid item xs={12} sm={12} md={5} className="thread-control">
              <div className={classes.section}>
                <Paper className={classes.paper}>
                  <SectionHeader sectionTitle="THREAD CONTROL" />
                  <CSThreadControl />
                </Paper>
              </div>
            </Grid>
          </Draggable>
        </Grid>

        <Grid item container spacing={1}>
          <Draggable>
            <Grid item xs={12} md={4} className="state">
              <div className={classes.section}>
                <Paper className={classes.paper}>
                  <SectionHeader sectionTitle="THREAD STATE" />
                  <ThreadState />
                </Paper>
              </div>
            </Grid>
          </Draggable>
          <Draggable>
            <Grid item xs={12} md={8} className="process">
              <div className={classes.section}>
                <Paper className={classes.paper}>
                  <SectionHeader sectionTitle="PROCESS (MULTI-THREADED)" />
                  <CSProcess />
                </Paper>
              </div>
            </Grid>
          </Draggable>
        </Grid>
      </Grid>
    </div>
  );
}
