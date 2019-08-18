import nanoid from 'nanoid';

import {ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE} from '../Actions'

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
    /*case EDIT_SERVICE:
      return state.forEach(service => {
        if (service.id === id) {
          service.name = name;
          service.price = price;
        }
      })*/
    default:
      return state;
  }

}

export default serviceListReducer