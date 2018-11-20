var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About Component</h3>
//     );
//   }
// });

//Since render is the only function, this component is a candidate for Stateless Functional Component
var About = props =>{
  return(
    <div>
      <h1 className="text-center page-title"> About </h1>
      <p>
        This is an application made with React that enables the user to search for
        the temperature of any city in the world.
       </p>
       <p>
        Here are some of the tools I used:
       </p>
      <ul>
        <li>
          <a href="https://reactjs.org" target="_blank"> React </a>
          - This is the javascript library that forms the backbone of the application
        </li>
        <li>
          <a href="https://openweathermap.org" target="_blank"> Open Weather Map </a>
           - Open weather map provides the api that returns the temperature of the city that is searched
        </li>
        <li>
          <a href="https://foundation.zurb.com" target="_blank"> Foundation </a>
          - Foundation provides Style to the application
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
