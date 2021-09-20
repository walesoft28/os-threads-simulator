import React, { useContext } from "react";
import ThreadStateInstance from "../components/ThreadStateInstance";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import { CriticalSectionContext } from "../context/CriticalSectionContext";

// const threadLifeCycleInstanceData = {
//   bgColor: "#f50057",
//   color: "white",
// };

function ThreadState() {
  const { threads } = useContext(CriticalSectionContext);

  return (
    <Grid container spacing={3} direction="column">
      {threads.map(({ threadID, color }) => (
        <ThreadStateInstance key={threadID} threadID={threadID}>
          <Chip
            label={`T${threadID}`}
            style={{ backgroundColor: color, color: "white" }}
          ></Chip>
        </ThreadStateInstance>
      ))}
    </Grid>
  );
}

export default ThreadState;
