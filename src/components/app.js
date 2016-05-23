import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Link} from 'react-router';



export default class App extends Component {
	
	render(){
		return(
			<div>
					<ul className="nav nav-tabs">
					  <li id="Home" role="presentation" className="({this.props.children.type.name}=='Home')? active:''"><Link to="home">Home</Link></li>
					  <li id="Weather" role="presentation" className="({this.props.children.type.name}=='Weather'||{this.props.children.type.name}=='App')? active:''"><Link to="weather">Weather</Link></li>
					  <li id="Jobs" role="presentation" className="({this.props.children.type.name}=='Jobs')? active:''"><Link to="jobs">Jobs</Link></li>					  
					  <li id="ContactUs" role="presentation" className="({this.props.children.type.name}=='ContactUs')? active:''"><Link to="contactus">Contact us</Link></li>
					</ul>				
					{this.props.children}
			</div>
			);
	}
}