import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google_map';

export default class WeatherList extends Component{
	
	

	renderWeather(cityData){
		var tdthalign={'vertical-align':'middle !important','text-align':'center !important'};
        var firstoftype={height:'250px',width:'300px'};
		const temps = _.map(cityData.list.map(weather=>weather.main.temp),(temps)=>(1.8*(temps-273)+32));
		const pressures = cityData.list.map(weather=>weather.main.pressure);
		const humidities = cityData.list.map(weather=>weather.main.humidity);
		//const lon=cityData.city.coord.lon;
		//const lat=cityData.city.coord.lat;
		//ES6 way of writting - destructuring
		const {lon, lat} = cityData.city.coord;
		//console.log(weather);
		//<td>{cityData.city.name}</td>
		return (
			<tr style={tdthalign} key={cityData.city.name}>
				<td style={firstoftype}><GoogleMaps lon={lon} lat={lat} /></td>
				<td>
					<Chart data={temps} color="orange" units="ºF"/>
				</td>
				<td>
					<Chart data={pressures} color="red" units="hPa"/>
				</td>
				<td>
					<Chart data={humidities} color="green" units="%"/>
				</td>
				
			</tr>

			);
	}
	render(){
		var tdthalign={'vertical-align':'middle !important','text-align':'center !important'};
    var firstoftype={height:'250px',width:'300px'};
		return (
			<table className="table table-hover">
				<thead>
					<tr style={tdthalign}>	
						<th style={tdthalign}>City</th>
						<th style={tdthalign}>Temperature (ºF)</th>
						<th style={tdthalign}>Pressure (hPa)</th>
						<th style={tdthalign}>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state){
	return {weather : state.weather};
}

//ES6 way of writing the code
//function mapStateToProps({weather} // same as const weather=state.weather){
//	return {weather};// same as {weather : weather};
//}

export default connect(mapStateToProps)(WeatherList);