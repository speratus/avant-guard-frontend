import {createStore, combineReducers} from 'redux'
import gameReducer from './reducers/GameReducer'
import sessionsReducer from './reducers/sessionsReducer'
import gameOptionsReducer from './reducers/gameOptionsReducer'
import timerReducer from './reducers/timerReducer'
import gameLoading from './reducers/gameLoading'

const reducers = combineReducers({
    game: gameReducer,
    loggedIn: sessionsReducer,
    gameOptions: gameOptionsReducer,
    timer: timerReducer,
    gameLoading
})

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)