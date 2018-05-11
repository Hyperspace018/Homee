import { combineReducers } from 'redux'
import { reducer as fromReducer } from 'redux-form';

import nav from './nav'
import homeworkReducers from '../Dashboard/reducers';
import registerReducers from '../Register/reducers';

const rootReducers = combineReducers({
  nav: nav,
  homeworkReducers: homeworkReducers,
  registerReducers: registerReducers,
  form: fromReducer
})

export default rootReducers