import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./Components/Container";
import AppPage from "./Components/AppPage";
import Favorites from "./Components/Favorites";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Container} />
        <Route path="/AppPage" component={AppPage} />
        <Route path="/Favorites" component={Favorites} />
      </div>
    </Router>
  );
}

export default App;
