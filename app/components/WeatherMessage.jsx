var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var{temp, location}=this.props;
//     return(
//       <div>
//         <h4>It's {temp}°C in {location}</h4>
//       </div>
//     );
//   }
// });

//Since render is the only function, this component is a candidate for Stateless Functional Component
var WeatherMessage = props =>{
  var{temp, location} = props
  return(
    <div>
      <h3 className="text-center">It's {temp}°C in {location}</h3>
    </div>
  )
}

module.exports = WeatherMessage;
