import { CHANGE_SERVICE_FIELD, CLEAR_FIELDS } from '../Actions'

const initialState = {
  name: '',
  price: '',
};

function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case CLEAR_FIELDS:
      return initialState;
    default:
    return state;
  }
}

export default serviceAddReducer;