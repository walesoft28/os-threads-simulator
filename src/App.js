import "./App.css";
import AppHeader from "./components/AppHeader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Threads from "./pages/Threads";
import CriticalSectionProblem from "./pages/CriticalSectionProblem";
import { ThreadProvider } from "./context/ThreadContext";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <BrowserRouter>
      <ThreadProvider>
        <SnackbarProvider preventDuplicate>
          <div className="App">
            <AppHeader />
            <Container maxWidth="xl">
              <Switch>
                <Route exact path="/">
                  <Threads />
                </Route>
                <Route exact path="/critical-section-problem">
                  <CriticalSectionProblem />
                </Route>
              </Switch>
            </Container>
          </div>
        </SnackbarProvider>
      </ThreadProvider>
    </BrowserRouter>
  );
}

export default App;
