
// Include React
var React = require("react");
//router
var Link = require("react-router").Link;
var Navbar = require('./Navbar');

// Create the Main component
var Book = React.createClass({

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
                    <div className ="col--12">
                        <div className="row">
                            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=14056461" width="100%" height="800" frameBorder="0"></iframe>
                            <script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Book;
