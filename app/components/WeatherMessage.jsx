var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var{temp, location}=this.props;
    return(
      <div>
        <h4>It's {temp}°C in {location}</h4>
      </div>
    );
  }
});

module.exports = WeatherMessage;