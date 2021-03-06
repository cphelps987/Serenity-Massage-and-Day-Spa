/**
 * Created by courtneyphelps on 7/29/17.
 */
// Include React
var React = require("react");
//router
var Link = require("react-router").Link;
var Navbar = require('./Navbar');


// Create the Main component
var Reviews = React.createClass({

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
                    <div className="col-md-12">
                        <div className="row">
                            <h1>Reviews</h1>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row lead">
                            <div id="stars" className="starrr"></div>
                            You gave a rating of <span id="count">0</span> star(s)
                        </div>

                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Reviews;
