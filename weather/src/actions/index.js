import axios from 'axios';

const API_KEY = '5e286905e3491460810a6d81140e1079';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// The Action creators always have to return an action 
// & an action is an object which always has to have a type.
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // Axios will return a promise right here, the promise doesn't actually contain any of our data
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    // The payload is an optional property that goes along with actions 
    // that can contain some additional data that describes this particular action.
    payload: request
  };
}