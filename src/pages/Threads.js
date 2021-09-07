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
      <Grid container spacing={3} direction="column">
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <div className={classes.section}>
              <Paper className={classes.paper}>
                <SectionHeader sectionTitle="CENTRAL CONTROL" />
                <CentralControl />
              </Paper>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={5}>
            <div className={classes.section}>
              <Paper className={classes.paper}>
                <SectionHeader sectionTitle="THREAD LIFE-CYCLE" />
                <ThreadLifeCycle />
              </Paper>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <div className={classes.section}>
              <Paper className={classes.paper}>
                <SectionHeader sectionTitle="THREAD CONTROL" />
                <ThreadControl />
              </Paper>
            </div>
          </Grid>
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={10}>
            <div className={classes.section}>
              <Paper className={classes.paper}>
                <SectionHeader sectionTitle="PROCESS (MULTI-THREADED)" />
                <Process />
              </Paper>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.section}>
              <Paper className={classes.paper}>
                <Completed />
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
