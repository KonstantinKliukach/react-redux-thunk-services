import {   
  SERVICE_ADD_REQUEST,
  SERVICE_ADD_ERROR,
  SERVICE_ADD_SUCCESS,
  SERVICE_CHANGE_FIELD,
  FETCH_SERVICE_READY,
 } from '../Actions'


const initialState = {
  item: {id: '', name: '', price: ''},
  loading: false,
  error: null
};

function serviceAddReducer(state = initialState, action) {
  const { item } = state
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
      return {...state, item:{...item, [name]: value}} 
    case FETCH_SERVICE_READY: 
      return {
        ...state, loading: false, error: null,
        item: {...action.payload.item}
      }
    default:
    return state
  }
  
}

export default serviceAddReducer;