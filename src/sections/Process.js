import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import SingleThreadBlock from "../components/SingleThreadBlock";
import { ThreadContext } from "../context/ThreadContext";
import Zoom from "react-reveal/Zoom";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";
import SingleThread from "../components/SingleThread";
import ProgressBar from "../components/ProgressBar";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function Process() {
  const { threadNumber, threadColors, progress, shuffle } =
    useContext(ThreadContext);
  const classes = useStyles();

  const createThreads = (numberOfThreads, colors) => {
    let threadArr = [];
    for (let i = 0; i < numberOfThreads; i++) {
      threadArr.push({ thread: i + 1, color: colors[i] });
    }
    return threadArr;
  };

  const threads = createThreads(threadNumber, threadColors);
  const random = shuffle(threads.map((thread) => thread.thread));
  console.log(random);
  console.log(progress);

  return (
    <div>
      <Grid container spacing={1} direction="column">
        {threads.map(({ thread, color }) => {
          return (
            <Zoom>
              <SingleThreadBlock key={thread}>
                <Chip
                  className={classes.chip}
                  label={`T${thread}`}
                  style={{ backgroundColor: color, color: "white" }}
                ></Chip>
                <SingleThread color={color}>
                  <ProgressBar>
                    <div
                      style={{
                        backgroundColor: color,
                        height: "100%",
                        maxWidth: "100%",
                        width:
                          (thread === 1 && `${progress * random[thread]}%`) ||
                          (thread === 2 && `${progress * random[thread]}%`) ||
                          (thread === 3 && `${progress * random[thread]}%`) ||
                          (thread === 4 && `${progress * random[thread]}%`) ||
                          (thread === 5 && `${progress * random[thread]}%`) ||
                          (thread === 6 && `${progress * random[thread]}%`) ||
                          (thread === 7 && `${progress * random[thread]}%`) ||
                          "",
                      }}
                    ></div>
                  </ProgressBar>
                </SingleThread>
              </SingleThreadBlock>
            </Zoom>
          );
        })}
      </Grid>
    </div>
  );
}

export default Process;
