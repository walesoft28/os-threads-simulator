import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CSSingleThreadBlock from "../components/CSSingleThreadBlock";
import { CriticalSectionContext } from "../context/CriticalSectionContext";
import Zoom from "react-reveal/Zoom";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";
import SingleThread from "../components/SingleThread";
import ProgressBar from "../components/ProgressBar";
import Typography from "@material-ui/core/Typography";

// const threadLifeCycleInstanceData = {
//   bgColor: "#f50057",
//   color: "white",
// };

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
  text: {
    marginTop: 20,
    textAlign: "center",
  },
  prompt: {
    margin: 20,
    textAlign: "center",
  },
}));

function SharedResource() {
  const { executingThread } = useContext(CriticalSectionContext);
  const [executing, setExecuting] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (executingThread.length > 0) {
      setExecuting(true);
    }
  }, []);

  return (
    <Grid container spacing={3} direction="column" alignItems="center">
      {executingThread.length ? (
        executingThread.map(({ threadID, color }) => {
          return (
            <Zoom>
              <div className={classes.prompt}>
                <span
                  style={{ color: color, fontWeight: "bold", fontSize: "20px" }}
                >{`T${threadID}`}</span>{" "}
                is accessing shared resource .......
              </div>
              <CSSingleThreadBlock key={threadID} threadID={threadID}>
                <Chip
                  className={classes.chip}
                  label={`T${threadID}`}
                  style={{ backgroundColor: color, color: "white" }}
                ></Chip>
                <SingleThread color={color}>
                  <ProgressBar>
                    <div
                      style={{
                        backgroundColor: color,
                        height: "100%",
                        maxWidth: "100%",
                      }}
                    ></div>
                  </ProgressBar>
                </SingleThread>
              </CSSingleThreadBlock>
            </Zoom>
          );
        })
      ) : (
        <Typography variant="h6" className={classes.text}>
          No Threads Executing ...
        </Typography>
      )}
    </Grid>
  );
}

export default SharedResource;
