/**
 * Created by courtneyphelps on 7/29/17.
 */
// Include React
var React = require("react");
//router
var Link = require("react-router").Link;
var Navbar = require('./Navbar');


// Create the Main component
var Service = React.createClass({

    // getInitialState: function(){

    // if (logged in = true){

    //set intial state
    // } else {
    //redirect(loginpage)

    //   }

    // },

    // Here we render the component
    render: function() {

        return (
            <div>
                <Navbar/>

                <div className="container">
                    <div className ="col-md-12">
                        <div className="row">
                            <h1>Hello World Service.js</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Service;
