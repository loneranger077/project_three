import axios from "axios";

function Auth() {
  let loggedIn = false;
  function register(userData) {
    console.log(userData);
    return axios
      .post("/api/register", userData)
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function logIn(username, password, cb) {
    axios
      .post("/api/authenticate", { username, password })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        loggedIn = true;
        cb(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  function logOut(cb) {
    localStorage.removeItem("token");
    loggedIn = false;
    cb();
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function isLoggedIn(loggedIn) {
    return loggedIn;
  }

  return {
    isLoggedIn,
    register,
    logIn,
    logOut,
    getToken
  };
}

export default Auth();
