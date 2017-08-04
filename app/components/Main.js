// Include React
var React = require("react");
//router
var Link = require("react-router").Link;
var Navbar = require('./Navbar');


// Create the Main component
var Main = React.createClass({

    getInitialState: function(){
        return{

        }
    },

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
                        <h1>Serenity Massage & Day Spa Services</h1>
                        <p>Meggings kombucha pok pok heirloom, PBR&B tumeric craft beer offal cold-pressed. Vice kickstarter literally salvia. Heirloom cronut pitchfork thundercats pour-over. +1 vegan cardigan, keffiyeh normcore fam pabst pickled church-key tumblr synth. Tattooed shabby chic vexillologist vinyl. Asymmetrical pug pitchfork, PBR&B cloud bread lo-fi poutine. Shoreditch normcore typewriter, distillery single-origin coffee venmo brunch try-hard. Cred church-key you probably haven't heard of them gochujang. Hammock ramps pour-over tattooed. Listicle shaman ramps street art retro, lumbersexual cred swag roof party chia adaptogen tbh taxidermy lomo raw denim. Tumblr gentrify artisan, blue bottle synth organic jean shorts occupy pug viral brooklyn roof party meh man bun. +1 banjo tilde kitsch mlkshk meh. Activated charcoal food truck thundercats coloring book pour-over, distillery hoodie. Hexagon prism wolf kinfolk 3 wolf moon cold-pressed.
                            <br></br>
                            <br></br>
                            Kombucha wolf keffiyeh microdosing organic biodiesel vinyl cardigan. Direct trade artisan affogato umami kitsch. Plaid four dollar toast hot chicken affogato you probably haven't heard of them cray helvetica put a bird on it venmo vice butcher. Lyft semiotics irony everyday carry. Chillwave offal microdosing tumeric iPhone pabst seitan slow-carb PBR&B. Actually brooklyn readymade slow-carb la croix subway tile vice freegan tacos. Migas umami narwhal before they sold out microdosing tilde. Thundercats distillery crucifix messenger bag pop-up scenester. Gochujang tumeric tilde lumbersexual semiotics XOXO. Tbh selfies 3 wolf moon pickled intelligentsia. Fixie readymade 90's yr knausgaard VHS single-origin coffee waistcoat raw denim disrupt succulents bicycle rights shaman gastropub. Put a bird on it semiotics lumbersexual street art wayfarers pinterest paleo helvetica kombucha celiac. Gentrify direct trade photo booth, offal ennui portland pitchfork authentic +1. Distillery biodiesel crucifix jean shorts.</p>
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
module.exports = Main;
