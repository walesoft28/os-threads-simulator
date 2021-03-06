import React, { useContext } from "react";
import ThreadLifeCycleInstance from "../components/ThreadLifeCycleInstance";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import { ThreadContext } from "../context/ThreadContext";

// const threadLifeCycleInstanceData = {
//   bgColor: "#f50057",
//   color: "white",
// };

function ThreadLifeCycle() {
  const { threads } = useContext(ThreadContext);

  return (
    <Grid container spacing={3} direction="column">
      {threads.map(({ threadID, color }) => (
        <ThreadLifeCycleInstance key={threadID} threadID={threadID}>
          <Chip
            label={`T${threadID}`}
            style={{ backgroundColor: color, color: "white" }}
          ></Chip>
        </ThreadLifeCycleInstance>
      ))}
    </Grid>
  );
}

export default ThreadLifeCycle;
