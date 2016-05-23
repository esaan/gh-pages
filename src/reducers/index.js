import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import JobsReducer from './reducer_jobs';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  jobs: JobsReducer,
  weather: WeatherReducer  
});

export default rootReducer;
