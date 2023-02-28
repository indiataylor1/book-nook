const express = require("express");
const handlebars = require("express-handlebars");
const session = require('express-session');
const path = require("path");
const routes = require("./controllers");
const helpers = require('./utils/helper');


const PORT = process.env.PORT || 3001;

const app = express();


// Set up Handlebars.js engine with custom helpers
const hbs = handlebars.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// the routes
app.use(routes);

const init = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

init();
