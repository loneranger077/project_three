import React from "react";

import "./App.css";
import FormRegister from "./Components/FormRegister";
import FormLogin from "./Components/FormLogin";

function App() {
  return (
    <div className="App">
      <FormLogin />
      <FormRegister />
    </div>
  );
}

export default App;
