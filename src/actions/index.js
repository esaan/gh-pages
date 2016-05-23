import axios from 'axios';

//const API_KEY='44db6a862fba0b067b1930da0d769e98';
const API_KEY='bfb3136e0e74ed84ded848aea7708be8';
const ROOT_WEATHER_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_JOB_URL = `http://service.dice.com/api/rest/jobsearch/v1/simple.json`;

export const FETCH_WEATHER='FETCH_WEATHER';
export const FETCH_JOBS = 'FETCH_JOBS';

export function fetchWeather(city){
	const url=`${ROOT_WEATHER_URL}&q=${city},us`;
	const request=axios.get(url);
	//console.log("request -",request);
		return {type:FETCH_WEATHER,payload: request};
	}
export function fetchJobs(job_keyword,city='',job_state=''){
		const URL=`${ROOT_JOB_URL}?text=${job_keyword}&city=${city}&state=${job_state}`;
		console.log(URL);
		const request=axios.get(URL);
		//console.log(request);
		return {type: FETCH_JOBS,payload: request};	
	}

