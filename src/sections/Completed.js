import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "../components/SectionHeader";
import SingleCompleted from "../components/SingleCompleted";
import { ThreadContext } from "../context/ThreadContext";
import { makeStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginRight: theme.spacing(1),
  },
}));

function Completed() {
  const { threadNumber, threadColors } = useContext(ThreadContext);

  const classes = useStyles();

  const createThreads = (numberOfThreads, colors) => {
    let threadArr = [];
    for (let i = 0; i < numberOfThreads; i++) {
      threadArr.push({ thread: i + 1, color: colors[i] });
    }
    return threadArr;
  };

  const threads = createThreads(threadNumber, threadColors);
  return (
    <>
      <SectionHeader sectionTitle="COMPLETED" />
      <Grid container spacing={2} direction="column">
        {threads.map(({ thread, color }) => (
          <SingleCompleted key={thread}>
            <Chip
              className={classes.chip}
              label={`T${thread}`}
              style={{ backgroundColor: color, color: "white" }}
            ></Chip>
          </SingleCompleted>
        ))}
      </Grid>
    </>
  );
}

export default Completed;
