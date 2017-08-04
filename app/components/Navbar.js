/**
 * Created by courtneyphelps on 7/31/17.
 */
var React = require("react");
//router
var Link = require("react-router").Link;

var Navbar = React.createClass({

    render: function render() {

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link className="active" to='/'><a>Home<span className="sr-only">(current)</span></a></Link></li>
                            <li><a><Link to='/about'>About</Link></a></li>
                            <li><a><Link to='/faq'>FAQ</Link></a></li>
                            <li><a><Link to='/contact'>Contact</Link></a></li>
                            <li><a><Link to='/service'>Service</Link></a></li>
                            <li><a><Link to='/book'>Book</Link></a></li>
                        </ul>

                    </div>
                </div>
            </nav>

        )
    }
});

// Export the component back for use in other files
module.exports = Navbar;
