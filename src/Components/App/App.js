import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import store from '../../Store';
import {Provider} from 'react-redux';

import './App.css';

import InputForm from '../InputForm'
import Table from '../Table'


const App = () => {
  return (
    <div className='trainings-app'>
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" render={() => (
              <Redirect to="/services"/>
          )}/>
          <Route exact path="/services" component={Table}/>
          <Route path="/services/:id" component={InputForm}/>
        </BrowserRouter>
      </Provider>
    </div>
  );    
}

export default App;
