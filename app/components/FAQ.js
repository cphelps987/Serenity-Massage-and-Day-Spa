/**
 * Created by courtneyphelps on 7/29/17.
 */
// Include React
var React = require("react");
//router
var Link = require("react-router").Link;
var Navbar = require('./Navbar');


// Create the Main component
var FAQ = React.createClass({

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
                            <h1>FAQ</h1>
                        </div>
                    </div>
                    <div className ="col-md-6">
                        <div className="row">
                            <form>
                                <div className="form-group">
                                    <label for="formGroupExampleInput">Title</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Title"></input>
                                </div>
                                <div className="form-group">
                                    <label for="exampleTextarea">Question</label>
                                    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = FAQ;
