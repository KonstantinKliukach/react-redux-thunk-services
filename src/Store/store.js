import { createStore, combineReducers,  applyMiddleware } from "redux";
import serviceAddReducer from '../Reducers/serviceAdd'
import serviceListReducer from '../Reducers/serviceList'
import thunk from "redux-thunk";


const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;