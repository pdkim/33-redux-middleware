import {createStore, combineReducers, applyMiddleware} from 'redux';
import categoryState from '../src/reducer/category.js';
import expensesState from '../src/reducer/expense.js';
import logger from '../src/middleware/logger.js';

const appReducer = combineReducers({
  categoryState,
  expensesState,
});

export default createStore(appReducer, applyMiddleware(logger));