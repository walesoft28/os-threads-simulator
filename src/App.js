import "./App.css";
import AppHeader from "./components/AppHeader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import Threads from "./pages/Threads";
import CriticalSectionProblem from "./pages/CriticalSectionProblem";
import { ThreadProvider } from "./context/ThreadContext";
import { CriticalSectionProvider } from "./context/CriticalSectionContext";
import { SnackbarProvider } from "notistack";
import ScreenOne from "./pages/Tutorial/Threads/ScreenOne";
import ScreenTwo from "./pages/Tutorial/Threads/ScreenTwo";
import ScreenThree from "./pages/Tutorial/Threads/ScreenThree";
import ScreenFour from "./pages/Tutorial/Threads/ScreenFour";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider preventDuplicate>
        <ThreadProvider>
          <CriticalSectionProvider>
            <div className="App">
              <AppHeader />
              <Container maxWidth="xl">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/threads">
                    <Threads />
                  </Route>
                  <Route exact path="/critical-section-problem">
                    <CriticalSectionProblem />
                  </Route>
                  <Route exact path="/tutorial/threads/screen-one">
                    <ScreenOne />
                  </Route>
                  <Route exact path="/tutorial/threads/screen-two">
                    <ScreenTwo />
                  </Route>
                  <Route exact path="/tutorial/threads/screen-three">
                    <ScreenThree />
                  </Route>
                  <Route exact path="/tutorial/threads/screen-four">
                    <ScreenFour />
                  </Route>
                </Switch>
              </Container>
            </div>
          </CriticalSectionProvider>
        </ThreadProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
