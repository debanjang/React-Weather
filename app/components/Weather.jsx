var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({temp:temp,
                    location: location,
                    isLoading: false
                  });
    },function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },


  /* Gets called when the component is loaded on to the browser. 
  As such, we can pass the location query param to the handleSearch function to load the weather.
  When the Example component redirects to this component, it gets loaded on to the browser
  and this method gets called */
  componentDidMount: function(){
    /* Using React Router we get access to props for our query params.
    First location is the default props that react router gives to the component.
    The second location is the user defined query param name */
    var location = this.props.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      //Clear up the query params in the browser address bar. Redirect to the root url.
      window.location.hash = '#/';
    }
  },


  
  /* Listen to props change by parent component after this component has already been rendered.
    The only parameter is the new props that are being passed.
    In this case, the React Router is changing the location props when a new query parameter
    is passed from the Nav Search Bar. This will only be needed when the Nav search is used from 
    the weather page itself as the weather component is already rendered on the browser 
    and componentDidMount will not be called  */
  componentWillReceiveProps: function(newProps){
    //debugger;
    var location = newProps.location.query.location;
    if(location && location.length>0){
     this.handleSearch(location);
     //Clear up the query params in the browser address bar. Redirect to the root url.
     window.location.hash = '#/';
    }
  },

  render: function(){
    var{temp, location, isLoading, errorMessage}=this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center"> Fetching Weather... </h3>
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }


    return(
      <div>
        <h1 className="text-center page-title"> Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
