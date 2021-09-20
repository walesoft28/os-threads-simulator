import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import SingleThreadBlock from "../components/SingleThreadBlock";
import { ThreadContext } from "../context/ThreadContext";
import Zoom from "react-reveal/Zoom";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";
import SingleThread from "../components/SingleThread";
import ProgressBar from "../components/ProgressBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
  text: {
    marginTop: 20,
  },
}));

function Process() {
  const { threads } = useContext(ThreadContext);
  const classes = useStyles();

  console.log("I dey check something");

  return (
    <div>
      <Grid container spacing={1} direction="column">
        {threads.length ? (
          threads.map(({ threadID, color, threadWidth }) => {
            return (
              <Zoom>
                <SingleThreadBlock key={threadID}>
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
                          width: `${threadWidth}%`,
                        }}
                      ></div>
                    </ProgressBar>
                  </SingleThread>
                </SingleThreadBlock>
              </Zoom>
            );
          })
        ) : (
          <Typography variant="h6" className={classes.text}>
            No Existing Threads...
          </Typography>
        )}
      </Grid>
    </div>
  );
}

export default Process;
