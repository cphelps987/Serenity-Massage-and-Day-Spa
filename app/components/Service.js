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
                    <div className="col-lg-12">
                        <div className="row">
                            <h1>Services</h1>
                            <table className="table table-hover">
                                <h3>Massage Services</h3>
                                <thead>
                                <tr>

                                    <th>Service</th>
                                    <th>Minutes</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>

                                    <td>Swedish Massage</td>
                                    <td>60</td>
                                    <td>Unwind with this gentle, relaxing massage that improves circulation and vitality. Pressure can range from very light to medium.</td>
                                    <td>$65</td>
                                </tr>
                                <tr>

                                    <td>Swedish Massage</td>
                                    <td>90</td>
                                    <td>Unwind with this gentle, relaxing massage that improves circulation and vitality. Pressure can range from very light to medium.</td>
                                    <td>$95</td>
                                </tr>
                                <tr>

                                    <td>Therapeutic Integrated Massage</td>
                                    <td>60</td>
                                    <td>UThis treatment is useful in the management of pain, utilizing a combination of techniques geared for the individual. It includes variations of kneading, tapping, stretching, traction, and the application of pressure to targeted points. The release of tension and stress is attributed to improving physical symptoms. Many clients report improved mood, better sleep quality, and enhanced concentration.</td>
                                    <td>$75</td>
                                </tr>
                                <tr>

                                    <td>Therapeutic Integrated Massage</td>
                                    <td>90</td>
                                    <td>UThis treatment is useful in the management of pain, utilizing a combination of techniques geared for the individual. It includes variations of kneading, tapping, stretching, traction, and the application of pressure to targeted points. The release of tension and stress is attributed to improving physical symptoms. Many clients report improved mood, better sleep quality, and enhanced concentration.</td>
                                    <td>$100</td>
                                </tr>
                                <tr>

                                    <td>Hot Stone Massage</td>
                                    <td>60</td>
                                    <td>A classic massage elevated to the ultimate spa experience. The therapist's healing touch combined with the therapeutic properties of warm, smooth basalt stones to melt tension from your muscles and de-stress your mind.</td>
                                    <td>$85</td>
                                </tr>
                                <tr>

                                    <td>Hot Stone Massage</td>
                                    <td>90</td>
                                    <td>A classic massage elevated to the ultimate spa experience. The therapist's healing touch combined with the therapeutic properties of warm, smooth basalt stones to melt tension from your muscles and de-stress your mind.</td>
                                    <td>$125</td>
                                </tr>
                                <tr>

                                    <td>Deep Tissue Massage</td>
                                    <td>60</td>
                                    <td>A deeper, firmer, therapeutic massage utilizing techniques that help to release chronic patterns of muscular tension. (Not recommended for a first-time massage.)</td>
                                    <td>$85</td>
                                </tr>
                                <tr>

                                    <td>Deep Tissue Massage</td>
                                    <td>90</td>
                                    <td>A deeper, firmer, therapeutic massage utilizing techniques that help to release chronic patterns of muscular tension. (Not recommended for a first-time massage.)</td>
                                    <td>$125</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <table className="table table-hover">
                                <h3>Body Scrubs</h3>
                                <thead>
                                <tr>

                                    <th>Service</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>

                                    <td>Seaweed Detox</td>
                                    <td>A seaweed wrap is typically made by combining seaweed with hot water and sometimes essential oils, clay and other skin care ingredients. A thick paste is formed and spread over your entire body. Your body is then wrapped in a heated towel, sheet or special blanket while the paste soaks into the skin. Seaweed body wraps are beneficial to the skin in several ways, so whether you’d like to drop excess skin after losing weight or rid your body of toxins, seaweed will do the trick.</td>
                                    <td>$130</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Service;
