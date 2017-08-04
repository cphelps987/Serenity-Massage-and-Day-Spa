/**
 * Created by courtneyphelps on 7/29/17.
 */
// Include React
var React = require("react");
//router
var Link = require("react-router").Link;
var Navbar = require('./Navbar');


// Create the Main component
var Contact = React.createClass({

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
                    <div className ="col-md-10">
                        <div className="row">
                            <h1>Contact</h1>
                            <p>
                                <h3>Phone: </h3>
                                407-739-8527</p>

                            <p>
                                <h3>Address:</h3>
                                525 Sybelia Parkway,<br></br>
                                Maitland, FL 32751</p>

                            <div>
                            <h3>Hours:</h3>
                                <table>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>Closed</td>
                                    </tr>
                                    <tr>
                                        <td>Monday</td>
                                        <td>9:00 AM - 6:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>9:00 AM - 6:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                        <td>9:00 AM - 6:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>9:00 AM - 6:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>9:00 AM - 6:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>Closed</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className ="col-md-2">
                        <div className="row">
                            <p>
                            <h3>Directions</h3>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Contact;
