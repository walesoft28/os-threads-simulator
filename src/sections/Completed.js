import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "../components/SectionHeader";
import SingleCompleted from "../components/SingleCompleted";
import { makeStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { ThreadContext } from "../context/ThreadContext";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginRight: theme.spacing(1),
  },
}));

const check = [
  { thread: 3, color: "#3f51b5" },
  { thread: 1, color: "#f50057" },
  { thread: 2, color: "#3d8769" },
  { thread: 4, color: "#87673d" },
];

function Completed() {
  const [completedThreads, setCompletedThreads] = useState([]);
  const [check, setCheck] = useState([]);

  const { threads, done } = useContext(ThreadContext);
  const classes = useStyles();

  useEffect(() => {
    setCheck(done);
    done.map((each) => {
      if (!completedThreads.includes(each)) {
        setCompletedThreads([...completedThreads, each]);
      }
      return each;
    });
  }, [threads, done, check]);

  return (
    <>
      <SectionHeader sectionTitle="COMPLETED" />
      <Grid container spacing={2} direction="column">
        {completedThreads &&
          completedThreads.map(({ threadID, color }) => (
            <SingleCompleted key={threadID}>
              <Chip
                className={classes.chip}
                label={`T${threadID}`}
                style={{ backgroundColor: color, color: "white" }}
              ></Chip>
            </SingleCompleted>
          ))}
      </Grid>
    </>
  );
}

export default Completed;
