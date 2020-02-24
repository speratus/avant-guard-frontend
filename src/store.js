import {createStore, combineReducers} from 'redux'
import gameReducer from './reducers/GameReducer'
import sessionsReducer from './reducers/sessionsReducer'

const reducers = combineReducers({
    game: gameReducer,
    loggedIn: sessionsReducer
})

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)