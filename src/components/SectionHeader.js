import React from "react";
import { Typography, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  divider: {
    marginTop: "5px",
    marginBottom: "5px",
  },
});

function SectionHeader({ sectionTitle }) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="button">{sectionTitle}</Typography>
      <Divider classes={{ root: classes.divider }} />
    </>
  );
}

export default SectionHeader;
