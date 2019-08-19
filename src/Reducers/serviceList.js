import nanoid from 'nanoid';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

function serviceListReducer(state = initialState, action) {
  return state

}

export default serviceListReducer