import React from 'react'

export default function Block(props) {
    return (
        <div style={columnStyle}>
            <p>{props.row}{props.column}</p>
        </div>
    )
}
const columnStyle = {
    display:'flex',
    padding:'2px'
  }