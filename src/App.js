import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Sudoku from './components/sudoku/Sudoku'

function App() {
  return (
    <div className="App">
     <Header />
    <Sudoku/> 
    </div>
  );
}

export default App;
