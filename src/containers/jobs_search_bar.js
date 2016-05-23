import React, { Component } from 'react';
import { fetchJobs } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term:''};
		this.state = {cityterm:''};
		this.state = {stateterm:''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onInputCityChange = this.onInputCityChange.bind(this);
		this.onInputStateChange=this.onInputStateChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		//this keyword binding is not required since props are accessable throught 
		//the class hence no need to bind(this) 
		//this.props=this.props.bind(this); //not required

	}
	onInputChange(event){
		//console.log(event.target.value);
		//'this' keyword is refering to onInputChange instance 
		//which do not have any setState() method hence
		//we need to bind the class level instance of 'this' to onInputChange() event
		this.setState({term:event.target.value});
	}
	onInputCityChange(event){
		//console.log(event.target.value);
		//'this' keyword is refering to onInputChange instance 
		//which do not have any setState() method hence
		//we need to bind the class level instance of 'this' to onInputChange() event
		this.setState({cityterm:event.target.value});
	}
	onInputStateChange(event){
		this.setState({stateterm:event.target.value});
	}
	onFormSubmit(event){
		//prevents the form submission on "enter" button click
		event.preventDefault();
		//on form submission we need to fetch the job data
		console.log(fetchJobs);
		this.props.fetchJobs(this.state.term,this.state.cityterm,this.state.stateterm);
		this.setState({term:''}) ;
		this.setState({cityterm:''});
		this.setState({stateterm:''});
	}
	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
			<div className="row">
				<div className="col-md-3 col-sm-3">
					<div className="input-group">
						<input type="text"
						onChange={this.onInputChange}
						value={this.state.term} 
						className="form-control" 
						placeholder="Search for a job"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-3">
					<div className="input-group">
						<input type="text"
						onChange={this.onInputCityChange}
						value={this.state.cityterm} 
						className="form-control" 
						placeholder="US City"/>
						
					</div>
				</div>
				<div className="col-md-3 col-sm-3" >
					<div className="input-group">
						<input type="text"
						onChange={this.onInputStateChange}
						value={this.state.stateterm} 
						className="form-control" 
						placeholder="US State"/>
						
					</div>
				</div>

				<div className="col-md-3 col-sm-3">
						<span className="input-group-btn">	
							<input type="submit" className="btn btn-secondary"/>
						</span>
				</div>
			</div>
			</form>
		);
	};

}

function mapsDispatchToProps(dispatch){
	console.log({fetchJobs});
	return bindActionCreators({fetchJobs},dispatch)
}

export default connect(null,mapsDispatchToProps)(SearchBar);
//OR ES6 way of binding action creators 
//one liner :- export default connect(null,{fetchJobs})(SearchBar);
//no need to have "function mapsDispatchToProps(dispatch)" method to bind the action creator