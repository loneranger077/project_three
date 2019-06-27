import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./Components/Container";
import AppPage from "./Components/AppPage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/login" component={Container} />
        <Route path="/" component={AppPage} />
      </div>
    </Router>
  );
}

export default App;
