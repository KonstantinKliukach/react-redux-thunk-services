import nanoid from 'nanoid';

import { FETCH_REQUEST, FETCH_ERROR, FETCH_READY, REMOVE_SERVICE } from '../Actions'

const initialState = {
  items: [],
  loading: false,
  error: null,
};

function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST: 
      return {...state, loading: true, error:null};
    case FETCH_ERROR: 
      const {error} = action.payload;
      return {...state, loading:false, error};
    case FETCH_READY: 
      const {items} = action.payload;
      return {...state, items, loading: false, error:null}
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return {...state, items: state.items.filter(service => service.id !== id)};
    default: 
      return state
  }
}

export default serviceListReducer