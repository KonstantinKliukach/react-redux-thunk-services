import {   
  SERVICE_ADD_REQUEST,
  SERVICE_ADD_ERROR,
  SERVICE_ADD_SUCCESS,
  SERVICE_CHANGE_FIELD, } from '../Actions'


const initialState = {
  item: {name: '', price: ''},
  loading: false,
  error: null
};

function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICE_ADD_REQUEST:
      return {...state, loading: true, error:null}
    case SERVICE_ADD_ERROR:
      const {message} = action.payload;
      return {...state, loading:false, error: message}
    case SERVICE_ADD_SUCCESS:
      return {...initialState}
    case SERVICE_CHANGE_FIELD:
      const { name, value } = action.payload
      const { item } = state
      return {...state, item:{...item, [name]: value}}  
    default:
    return state
  }
  
}

export default serviceAddReducer;