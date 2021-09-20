import React, { useContext } from "react";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import VerticalAlignCenterIcon from "@material-ui/icons/VerticalAlignCenter";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { CriticalSectionContext } from "../context/CriticalSectionContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "red",
    height: "200px",
  },
  threadInstance: {
    height: "10px",
    backgroundColor: "green",
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "green",
  },
}));

function CSSingleThreadControl({ threadNo, children }) {
  const { enterCriticalSection, exitCriticalSection } = useContext(
    CriticalSectionContext
  );

  const handleEnterCriticalSection = (id) => {
    enterCriticalSection(id);
  };

  const handleExitCriticalSection = (id) => {
    exitCriticalSection(id);
  };

  return (
    <Grid item xs={12} container justifyContent="space-evenly">
      {children}
      <Divider orientation="vertical" flexItem />
      <Button
        variant="contained"
        color="primary"
        endIcon={<VerticalAlignCenterIcon />}
        size="small"
        onClick={() => handleEnterCriticalSection(threadNo)}
      >
        Enter Critical Section
      </Button>
      <Button
        variant="outlined"
        color="primary"
        endIcon={<ExitToAppIcon />}
        size="small"
        onClick={() => handleExitCriticalSection(threadNo)}
      >
        Exit Critical Section
      </Button>
    </Grid>
  );
}

export default CSSingleThreadControl;
