import { createStore, combineReducers } from 'redux'
import reducer from './reducers/reducer.js'

const reducers = combineReducers({reducer})

export default createStore(reducers)