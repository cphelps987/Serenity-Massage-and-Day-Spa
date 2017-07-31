// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Reference the high-level components
var Main = require("../components/Main");
var About = require("../components/About");
var Service = require("../components/Service");
var Reviews = require("../components/Reviews");
var FAQ = require("../components/FAQ");
var Contact = require("../components/Contact");
var Calendar = require("../components/Calendar");
var Login = require("../components/Login");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

                <Route path="/" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/faq" component={FAQ} />
                <Route path="/contact" component={Contact} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/login" component={Login} />

    </Router>
);
