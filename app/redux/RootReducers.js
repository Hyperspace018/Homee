import { combineReducers } from 'redux'
import { reducer as fromReducer } from 'redux-form';

import nav from './nav'
import homeworkReducers from '../Dashboard/reducers';

const rootReducers = combineReducers({
  nav: nav,
  homeworkReducers: homeworkReducers,
  form: fromReducer
})

export default rootReducers