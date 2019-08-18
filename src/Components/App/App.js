import React from 'react';
import store from '../../Store';
import {Provider} from 'react-redux';

import './App.css';

import InputForm from '../InputForm'
import Table from '../Table'


const App = () => {
  return (
    <div className='trainings-app'>
      <Provider store={store}>
        <InputForm />
        <Table />
      </Provider>
    </div>
  );    
}

export default App;
