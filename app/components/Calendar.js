
// Include React
var React = require("react");
//router
var Link = require("react-router").Link;
var Navbar = require('./Navbar');

// Create the Main component
var Calendar = React.createClass({

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
                    <div className ="col-md-2">
                        <div className="row">
                        </div>
                    </div>
                    <div className ="col-md-8">
                        <div className="row">
                            <h1>Hello World Calendar.js</h1>
                        </div>
                    </div>
                    <div className ="col-md-2">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Calendar;
