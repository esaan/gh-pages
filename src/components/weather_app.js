import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/weather_search_bar';
import WeatherList from '../containers/weather_list';

export default class WeatherApp extends Component {
  render() {
    return (
      <div className="container">
      <div className="jumbotron">
      	<h3>React Redux 5 days Weather App</h3>
<pre>It is reading live data from weather API through redux actions & reducers and render's the data through React components.</pre>
<pre>Just enter your favorite city to get a glance of weather.</pre>
      </div>
      	<SearchBar/>
      	<WeatherList/>
      </div>
    );
  }
}
