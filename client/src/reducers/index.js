import { combineReducers } from 'redux';
import expenses from './expenses';
import income from './income'

export default combineReducers({
  expenses, income
});
