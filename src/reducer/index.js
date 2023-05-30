import reducer from './reducer';
import adminreducer from './adminreducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    reducer,
    adminreducer
})


export default rootReducer;