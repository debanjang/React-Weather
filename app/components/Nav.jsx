var React = require('react');
var {Link, IndexLink}  = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert("Not yet wired up!");
  },

  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClass="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClass="active" activeStyle={{fontWeight:'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/example" activeClass="active" activeStyle={{fontWeight:'bold'}}>Example</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search weather"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>
        </div>
      </div>
    );
  }
});

// var Nav = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to="/" activeClass="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
//         <Link to="/about" activeClass="active" activeStyle={{fontWeight:'bold'}}>About</Link>
//         <Link to="/example" activeClass="active" activeStyle={{fontWeight:'bold'}}>Example</Link>
//       </div>
//     );
//   }
// });

// // var Nav = props =>{
//   return(
//     <div>
//       <h2> Nav Component </h2>
//       <IndexLink to="/" activeClass="active" activeStyle={{fontWeight:'bold'}}> Get Weather </IndexLink>
//       <Link to="/about" aciveClass="active" activeStyle={{fontWeight:'bold'}}> About </Link>
//       <Link to = "/example" activeClass="active" activeStyle={{fontWeight:'bold'}}> Example </Link>
//     </div>
//   )
// }

module.exports = Nav;
