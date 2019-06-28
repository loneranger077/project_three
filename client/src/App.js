import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./Components/Container";
import AppPage from "./Components/AppPage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Container} />
        <Route path="/AppPage" component={AppPage} />
      </div>
    </Router>
  );
}

export default App;
