var React = require('react');

// var Example = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h3> Example Component </h3>
//         <p> Welcome to the Examples Page! </p>
//       </div>
//     );
//   }
// });

//Since render is the only function, this component is a candidate for Stateless Functional Component
var Example = props =>{
  return(
    <div>
      <h3> Example </h3>
      <p> Welcome to the Examples page! </p>
    </div>
  )
}

module.exports = Example;
