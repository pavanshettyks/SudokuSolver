import React from 'react'
import { connect } from 'react-redux';


function Block(props) {

    const updateValue =(e) =>{
        let data ={
            value:e.target.value,
            row:props.row,
            column:props.column
        }
        props.updateValue(data);
    }
    
    return (
        <div style={columnStyle}>
            {/* <p> {props.sudoku[props.row][props.column]}</p> */}
            <input type="number" value={props.block_data} onChange ={updateValue}  />

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        sudoku: state.SudokuReducer.puzzle,
    }
}

const mapDispatchToProps = dispatcher =>{
    return {
        updateValue: (data) =>dispatcher({ type:'updateValue',new_data: data})
        }
  }



const columnStyle = {
    display:'flex',
    padding:'2px',

    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
 
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Block)