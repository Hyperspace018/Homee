import { combineReducers } from 'redux'
import { reducer as fromReducer } from 'redux-form';

import nav from './nav'
import homeworkReducers from '../Dashboard/reducers';
import registerReducers from '../Register/reducers';
import loginReducers from '../Login/reducers';
import profileReducers from '../Profile/reducers';

const rootReducers = combineReducers({
  nav: nav,
  homeworkReducers: homeworkReducers,
  registerReducers: registerReducers,
  loginReducers: loginReducers,
  profileReducers: profileReducers,
  form: fromReducer
})

export default rootReducers;