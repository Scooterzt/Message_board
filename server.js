//config
const express = require("express");
const app = express();
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

const flash = require('express-flash');
app.use(flash());


//routes
require("./routes")(app);

//server
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));