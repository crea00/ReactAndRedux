import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import Activebook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: Activebook
});

export default rootReducer;
