// Include React
var React = require("react");
//router
var Link = require("react-router").Link;
var Navbar = require('./Navbar');


// Create the Main component
var About = React.createClass({

    // Here we render the component
    render: function() {

        return (
            <div>
                <Navbar/>

                <div className="container">
                    <div className ="col-md-12">
                        <div className="row">
                            <h1>Hello World About.js</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = About;
