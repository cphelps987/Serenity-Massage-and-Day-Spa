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
                                <p>
                                    <h3>Directions</h3>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.777711811668!2d-81.362549!3d28.6314276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce2161e524fe8373!2sSerenity+Massage+%26+Day+Spa+Services+By+Tracy+Sipe!5e0!3m2!1sen!2sus!4v1512618726955" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                                </p>
                            </div>
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
module.exports = Contact;
