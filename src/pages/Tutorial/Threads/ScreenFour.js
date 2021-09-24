import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    height: "100%",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function ScreenFour() {
  const classes = useStyles();
  return (
    <Bounce>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Where are Threads used?
            {/* <Wave>
            <img
              alt="👋"
              draggable="false"
              src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
              style={{
                height: "1em",
                width: "1em",
                margin: "0px 0.05em 0px 0.1em",
                verticalAlign: "-0.1em",
              }}
            />
          </Wave> */}
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Threads have been utilised to build network servers and web servers
            with great success. They also provide as a solid foundation for
            parallel program execution on multiprocessors with shared memory
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<ArrowBackIosIcon />}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/tutorial/threads/screen-three"
                  >
                    Back
                  </Link>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  <Link
                    to="/threads"
                    style={{ color: "white", textDecoration: "none" }}
                    // target="_blank"
                    // rel="noopener noreferrer"
                  >
                    Go To Console
                  </Link>
                </Button>
              </Grid>
              {/* <Grid item>
              <Button variant="outlined" color="primary">
                <a
                  href="https://github.com/walesoft28"
                  style={{ color: "#3f51b5", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </Button>
            </Grid> */}
            </Grid>
          </div>
          <div className={classes.footer}></div>
        </Container>
      </div>
    </Bounce>
  );
}

export default ScreenFour;

const Wave = styled.span`
  display: inline-block;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  animation-name: wave;
`;
