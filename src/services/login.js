const axios = require("axios");

function login(username, password) {
  return axios
    .post("http://localhost:3001/authenticate", {
      email: username,
      password: password,
    });
}

// login("Clarissa_Harber5281@hotmail.com", "AngkotRockz");

module.exports = {
    login
}