import nanoid from 'nanoid';

import {ADD_SERVICE, REMOVE_SERVICE, SET_SERVICE} from '../Actions'

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter(service => service.id !== id);
    case SET_SERVICE:
      let newState = [...state];
      newState.forEach(service => {
        if (service.id === action.payload.id) {
          service.name = action.payload.name;
          service.price = action.payload.price;
        }
      })
      return newState
    default:
      return state;
  }

}

export default serviceListReducer