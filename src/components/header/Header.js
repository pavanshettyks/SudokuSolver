import React from 'react'


export default function Header() {
    return (
        <header style ={headerStyle}>
            <h1>Welcome To Sudoku Solver</h1>
        </header>
    )
}
const headerStyle = {

    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '5px'
  }

  const LinkStyle ={
    color: '#fff',
    textDecoration: 'none',
    
}