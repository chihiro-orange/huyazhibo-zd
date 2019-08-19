import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
let store = createStore(reducers,applyMiddleware(logger,thunk,promise))
window.store = store
export default store