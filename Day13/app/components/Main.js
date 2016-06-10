var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Link to="/home"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
