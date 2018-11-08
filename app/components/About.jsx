var React = require('React');

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
    <h3> About Component </h3>
  )
}

module.exports = About;
