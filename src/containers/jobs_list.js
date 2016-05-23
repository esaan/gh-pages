import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class JobsList extends Component {
	/*constructor(props){
		super(props);
		//this.state = {pageNum:0};
		this.state = {offset:0}
		//console.log(props);
		this.state = {jobs:{ 
							resultItemList : [
							{detailUrl:'http://www.dice.com/job/result/rhalfint/01070-9875455?src=19',
							jobTitle:'CRM Administrator/Analyst',
							company:'Robert Half Technology', 
							location:'Tampa, FL',
							date:'2016-05-20'}]
						}
					};
	console.log('constructor');						
	console.log(this.state.jobs);		
	}*/
	RenderJobs(jobsData){
		//console.log(jobsData);
		var firstoftype = {height:'10px',width:'25%','text-align':'left'};
		const Alljobs=jobsData.resultItemList.map(jobs=>
			<tr>
				<td className="col-5-md col-5-sm">
					<a target="_blank" href={jobs.detailUrl}>{jobs.jobTitle}</a>
				</td>
				<td>{jobs.company}</td>	
				<td>{jobs.location}</td>
				<td>{jobs.date}</td>
			</tr>
			);
		//console.log(Alljobs.length);
		//console.log(Alljobs);		
		return (Alljobs);
	}
render(){
	return(
		<table className="table table-hover">
			<thead>

			<tr>
				<th>Job Title</th>
				<th>Company</th>
				<th>location</th>
				<th>Date</th>
			</tr>
			</thead>
			<tbody>			     
			 {this.props.jobs.map(this.RenderJobs)}			 
			</tbody>
		</table>
	);
}
}

function mapStateToProps(state){
	return {jobs : state.jobs};
	//return {weather : state.jobs};
	
}

//ES6 way of writing the code
//function mapStateToProps({weather} // same as const weather=state.weather){
//	return {weather};// same as {weather : weather};
//}

export default connect(mapStateToProps)(JobsList);