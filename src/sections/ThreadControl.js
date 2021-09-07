import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import SingleThreadControl from "../components/SingleThreadControl";
import { ThreadContext } from "../context/ThreadContext";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chip: {
    color: "white",
  },
}));

function ThreadControl() {
  const { threadNumber, threadColors } = useContext(ThreadContext);

  const classes = useStyles();

  const createThreadControls = (numberOfThreads, Colors) => {
    let threadArr = [];
    for (let i = 0; i < numberOfThreads; i++) {
      threadArr.push({ thread: i + 1, color: Colors[i] });
    }
    return threadArr;
  };

  const threadControls = createThreadControls(threadNumber, threadColors);
  console.log(threadColors);
  console.log(threadControls);
  return (
    <div>
      <Grid container spacing={1} direction="column">
        {threadControls.map(({ thread, color }) => {
          return (
            <SingleThreadControl key={thread} threadNo={thread}>
              <Chip
                className={classes.chip}
                label={`T${thread}`}
                style={{ backgroundColor: color }}
              ></Chip>
            </SingleThreadControl>
          );
        })}
      </Grid>
    </div>
  );
}

export default ThreadControl;
