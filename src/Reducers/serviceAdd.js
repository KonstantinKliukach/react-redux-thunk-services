import { CHANGE_SERVICE_FIELD, CLEAR_FIELDS, EDIT_SERVICE } from '../Actions'

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
    case EDIT_SERVICE:
      return {...action.payload}
    default:
    return state;
  }
}

export default serviceAddReducer;