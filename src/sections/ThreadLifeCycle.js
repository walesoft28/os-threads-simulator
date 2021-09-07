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
  const { threadNumber, threadColors } = useContext(ThreadContext);

  const createThreadLifeCycleInstance = (numberOfThreads, Colors) => {
    let threadArr = [];
    for (let i = 0; i < numberOfThreads; i++) {
      threadArr.push({ thread: i + 1, color: Colors[i] });
    }
    return threadArr;
  };

  const threadLifeCycleInstance = createThreadLifeCycleInstance(
    threadNumber,
    threadColors
  );
  return (
    <Grid container spacing={3} direction="column">
      {threadLifeCycleInstance.map(({ thread, color }) => (
        <ThreadLifeCycleInstance key={thread}>
          <Chip
            label={`T${thread}`}
            style={{ backgroundColor: color, color: "white" }}
          ></Chip>
        </ThreadLifeCycleInstance>
      ))}
    </Grid>
  );
}

export default ThreadLifeCycle;
