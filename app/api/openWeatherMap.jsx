var axios = require('axios');

const OPEN_WEATHER_MAP_URL_1 = 'https://api.openweathermap.org/data/2.5/find?';
const OPEN_WEATHER_MAP_URL_2 = 'units=metric&appid=a1ac1e49c692f94e4eee580c0dedb43a';

module.exports = {
  getTemp: function(location){
    //Step 1: Set up the URl
    var encodedLocation = encodeURIComponent(location);
    var url = `${OPEN_WEATHER_MAP_URL_1}q=${encodedLocation}&${OPEN_WEATHER_MAP_URL_2}`;

    //Step 2: Make the API call
    return axios.get(url).then(function(resp){ //we are going to chain this promise by including the return statement
                    console.log("resp in then: "+resp);
                    if(resp.data.cod=='200' && resp.status==200){
                        if(resp.data.list.length>0){ //handle the empty response case
                            return resp.data.list[0].main.temp;
                        }else{
                            throw new Error("No Such City Found");
                        }
                    }
                }, function(resp){
                    console.log("resp in error: "+resp);
                    if(resp.status!=200){
                        throw new Error(resp.data.message);

                    }
                    //throw error;
                });
  }
}
