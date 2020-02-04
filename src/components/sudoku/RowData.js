import React from 'react'
import Block from './Block'
const puzzle = [5,3,0,0,7,0,0,0,0]
export default function RowData(props) {
    return (
        <div style={rowrStyle}>
            
          {/*  {
                    Object.entries(props.column_data[1]).map((block_data,column) => {  
                                                    return <Block id = {column} row={props.row} column = {column} 
                                                     block_data ={block_data} />
                                              }
                                    )  
                    
            } */}
            {
                props.column_data.map((data,column)=>{
                    return <Block id={column} row={props.row} column = {column} block_data ={data}/>
                 }
                )
            }
            
        </div>
    )
}
const rowrStyle = {
    display:'flex',
    flexDirection:'row',
    background: '#333',
    color: '#fff',
  }