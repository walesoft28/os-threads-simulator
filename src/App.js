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
