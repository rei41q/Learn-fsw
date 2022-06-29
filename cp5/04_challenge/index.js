const express = require("express");
const app = express();
const port = 6003;

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/game", (req, res) => {
  return res.render("challange4");
});

app.post('/login', (req, res) => {
    
    const user = {
        username: "usernamenya", 
        password: "passwordnya"
    }

    // check apakah requestnya (username, password) sesuai dengan variable user
    // kalau sesuai return login ok
    // kalau tidak sesuai return login failed

})

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
