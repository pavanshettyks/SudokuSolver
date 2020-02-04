import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Sudoku from './components/sudoku/Sudoku'

import { Provider } from 'react-redux';
import store from "./redux/store"

function App() {
  return (
    <Provider store = {store}>
              <div className="App">
              <Header />
              <Sudoku/> 
              </div>
    </Provider>
  );
}

export default App;
