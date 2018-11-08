var React = require('react');
var {Link, IndexLink}  = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClass="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
        <Link to="/about" activeClass="active" activeStyle={{fontWeight:'bold'}}>About</Link>
        <Link to="/example" activeClass="active" activeStyle={{fontWeight:'bold'}}>Example</Link>
      </div>
    );
  }
});

module.exports = Nav;
