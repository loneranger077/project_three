import axios from "axios";

function Sound() {
  function saveSounds(soundData) {
    console.log(soundData);
    return axios
      .put("/api/sounds", soundData)
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  function retrieveSounds(soundData) {
    console.log(soundData);
    return axios
      .get(`/api/users/${userId}/sounds`, soundData)
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  return {
    saveSounds,
    retrieveSounds
  };
}
export default Sound();
