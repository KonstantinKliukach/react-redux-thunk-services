import { createStore, combineReducers } from "redux";
import serviceAddReducer from '../Reducers/serviceAdd'
import serviceListReducer from '../Reducers/serviceList'

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});

const store = createStore(reducer);
export default store;