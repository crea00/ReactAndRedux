import axios from 'axios';

const API_KEY = '5e286905e3491460810a6d81140e1079';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WETHER = 'FETCH_WETHER';

// The Action creators always have to return an action 
// & an action is an object which always has to have a type.
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // This will return a promise right here
  const request = axios.get(url);

  return {
    type: FETCH_WETHER,
    // The payload is an optional property that goes along with actions 
    // that can contain some additional data that describes this particular action.
    payload: request
  };
}