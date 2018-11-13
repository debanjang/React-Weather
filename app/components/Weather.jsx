var React = require('React');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState:function(){
    return{
      // location:'Miami',
      // temp:'30',
      isLoading: false
    };
  },

  handleSearch: function(location){
    var that = this;
    this.setState({
      // location: location,
      // temp: '24'
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({temp:temp,
                    location: location,
                    isLoading: false
                  });
    },function(errorMessage){
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },


  render: function(){
    var{temp, location, isLoading}=this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center"> Fetching Weather... </h3>
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    return(
      <div>
        <h1 className="text-center"> Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
