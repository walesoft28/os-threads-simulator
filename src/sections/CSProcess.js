import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CSSingleThreadBlock from "../components/CSSingleThreadBlock";
import { CriticalSectionContext } from "../context/CriticalSectionContext";
import Zoom from "react-reveal/Zoom";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core";
import SingleThread from "../components/SingleThread";
import ProgressBar from "../components/ProgressBar";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
  text: {
    marginTop: 20,
    textAlign: "center",
  },
}));

function CSProcess() {
  const { CSThreads } = useContext(CriticalSectionContext);
  const [actualThread, setActualThread] = useState([]);

  useEffect(() => {
    setActualThread(CSThreads);
    console.log("whoooooshhshs...");
  }, [CSThreads]);

  const classes = useStyles();
  console.log(actualThread);
  console.log("I dey check something");

  return (
    <div style={{ marginTop: 20 }}>
      <Grid container spacing={1} justifyContent="center">
        {actualThread.length ? (
          actualThread.map(({ threadID, color, hasRequested }) => {
            return (
              <Zoom>
                <Badge
                  invisible={!hasRequested}
                  color="secondary"
                  overlap="circular"
                  badgeContent="Requested Access"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <CSSingleThreadBlock key={threadID}>
                    <Chip
                      className={classes.chip}
                      label={`T${threadID}`}
                      style={{ backgroundColor: color, color: "white" }}
                    ></Chip>
                    <SingleThread color={color}>
                      <LinearProgress
                        color={color !== "#f50057" ? "secondary" : "primary"}
                        style={{ backgroundColor: color }}
                      />
                    </SingleThread>
                  </CSSingleThreadBlock>
                </Badge>
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

export default CSProcess;
