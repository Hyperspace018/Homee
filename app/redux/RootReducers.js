import { combineReducers } from 'redux'

import nav from './nav'
import homeworkReducers from '../Dashboard/reducers';

const rootReducers = combineReducers({
  nav: nav,
  homeworkReducers: homeworkReducers
})

export default rootReducers