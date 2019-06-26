import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./Components/Container";
import AppPage from "./Components/AppPage";
import Recorder from "./Components/Recorder";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={AppPage} />
        <Route path="/login" component={Container} />
        <Route path="/recorder" component={Recorder} />
      </div>
    </Router>
  );
}

export default App;
