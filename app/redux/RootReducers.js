import { combineReducers } from 'redux'

import nav from './nav'

const rootReducers = combineReducers({
  nav: nav,
})

export default rootReducers