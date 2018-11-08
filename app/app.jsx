var React = require('react'); //Since these are explicitly
                          //loaded dependencies in package.json, we dont need to include the full path
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');



// RaectDOM.render is the starting point of the application. render to the app container
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Weather}/>
        <Route path="/about" component={About}/>
        <Route path="/example" component={Example}/>
      </Route>
    </Router>,
    document.getElementById('app')
);

//Experiment with spread operator
// var objOne= {
//   name: 'Debanjan',
//   location: 'Bangalore'
// };
//
// var objTwo= {
//   age: '30',
//   ...objOne
// };
//
// console.log(objTwo);
