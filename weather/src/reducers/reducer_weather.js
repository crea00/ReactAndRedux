import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // These two lines are nearly completely identical.
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; // [ city, city, city ] NOT [ city, [ city, city ] ]
  }
  return state;
}