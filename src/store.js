import {createStore, combineReducers} from 'redux'
import gameReducer from './reducers/GameReducer'
import sessionsReducer from './reducers/sessionsReducer'
import gameOptionsReducer from './reducers/gameOptionsReducer'
import timerReducer from './reducers/timerReducer'
import resultsReducer from './reducers/resultsReducer'
import gamePhaseReducer from './reducers/gamePhaseReducer'
import rankingsReducer from './reducers/rankingsReducer'
import profileReducer from './reducers/profileReducer'

const reducers = combineReducers({
    game: gameReducer,
    loggedIn: sessionsReducer,
    gameOptions: gameOptionsReducer,
    timer: timerReducer,
    gameResults: resultsReducer,
    gamePhase: gamePhaseReducer,
    rankings: rankingsReducer,
    profileData: profileReducer
})

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)