import React from 'react'
import { connect } from 'react-redux';


function Block(props) {

    const updateValue =(e) =>{

        console.log(e.target.value)
        let data ={
            value:e.target.value,
            row:props.row,
            column:props.column
        }
        props.updateValue(data);
    }
    
    return (
        <div style={columnStyle}>
            <p>{props.block_data}</p>
            <input type="number" value={props.block_data} onChange ={updateValue}  />
        </div>
    )
}

const mapDispatchToProps = dispatcher =>{
    return {
        updateValue: (data) =>dispatcher({ type:'updateValue',new_data: data})
        }
  }



const columnStyle = {
    display:'flex',
    padding:'2px'
  }

  export default connect(null, mapDispatchToProps)(Block)