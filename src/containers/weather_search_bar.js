import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
	constructor (props){
		super(props);
		this.state = {term:''};
		this.onInputChange=this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

onInputChange(event){
	this.setState({term:event.target.value});
	// console.log(event.target.value);
}
onFormSubmit(event)
{
	event.preventDefault();
	//we need to go and fetch weather data from weather API
	//appid=44db6a862fba0b067b1930da0d769e98
	//http://api.openweathermap.org/data/2.5/forecast?q=phoenix,us&appid=44db6a862fba0b067b1930da0d769e98
	this.props.fetchWeather(this.state.term);
	this.setState({term:''});
}
	render(){

		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
					<input 
					type="text" 
					className="form-control" 
					placeholder='Search a city'
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">	
					<input className="btn btn-secondary" type='submit'/>
				</span>
			</form>

		);
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);