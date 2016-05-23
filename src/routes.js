
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Weather from './components/weather_app';
import Jobs from './components/jobs_app';
import Home from './components/home';

export default (
<Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home}/>
    <Route path="weather" component={Weather}/>    
    <Route path="jobs" component={Jobs}/>
</Route>
);
