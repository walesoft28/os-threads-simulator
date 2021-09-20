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
  const { threads } = useContext(ThreadContext);

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1} direction="column">
        {threads.map((thread) => {
          return (
            <SingleThreadControl
              key={thread.threadID}
              threadNo={thread.threadID}
            >
              <Chip
                className={classes.chip}
                label={`T${thread.threadID}`}
                style={{ backgroundColor: thread.color }}
              ></Chip>
            </SingleThreadControl>
          );
        })}
      </Grid>
    </div>
  );
}

export default ThreadControl;
