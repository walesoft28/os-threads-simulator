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
      <Grid container spacing={3} direction="column">
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <div className={classes.section}>
              <Paper className={classes.paper}>
                <SectionHeader sectionTitle="CENTRAL CONTROL" />
                <CSCentralControl />
              </Paper>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
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

          <Grid item xs={12} sm={12} md={5}>
            <div className={classes.section}>
              <Paper className={classes.paper}>
                <SectionHeader sectionTitle="THREAD CONTROL" />
                <CSThreadControl />
              </Paper>
            </div>
          </Grid>
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={12} md={4}>
            <div className={classes.section}>
              <Paper className={classes.paper}>
                <SectionHeader sectionTitle="THREAD STATE" />
                <ThreadState />
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={classes.section}>
              <Paper className={classes.paper}>
                <SectionHeader sectionTitle="PROCESS (MULTI-THREADED)" />
                <CSProcess />
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
