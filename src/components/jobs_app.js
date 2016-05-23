import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/jobs_search_bar';
import JobsList from '../containers/jobs_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      	<div className="jumbotron">
      		<h3>React Reducx App for Dice Job search </h3>      		
      	</div>
      	<div className="section">
      	<SearchBar/>
        <JobsList/>
      	</div>
      </div>
    );
  }
}
