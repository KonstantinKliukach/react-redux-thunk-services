import React from 'react';
import { BrowserRouter, Route, Link, Redirect, withRoute } from "react-router-dom";
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
          <Route path="/services" component={Table}/>
        </BrowserRouter>
      </Provider>
    </div>
  );    
}

export default App;
