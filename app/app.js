"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const Main = require("./components/Main");
const Navbar = require ("./components/Navbar");


// Grabs the Routes
const routes = require("./config/routes");

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));
