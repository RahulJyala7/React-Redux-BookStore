// ./src/reducers/index.js
import { combineReducers } from 'redux';
import books from './bookReducers'


const reducer =  combineReducers({
 
    books: books
  // More reducers if there are
  // can go here
});

export default reducer