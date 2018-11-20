var React = require('react');
var {Link} = require('react-router');

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
      <h1 className="text-center page-title"> Examples </h1>
      <p> Here are a few example locations for you to try out: </p>
      <ol>
        <li>
          <Link to="/?location=Kolkata"> Kolkata, WB </Link>
        </li>
        <li>
          <Link to="/?location=Toronto"> Toronto, Canada </Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Example;
