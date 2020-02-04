import React from 'react'
import Solution from './Solution'
import RowData from './RowData'
import { connect } from 'react-redux';
const sudoku_matrix = {
    "0" :{ "0": 0,"1": 0,"2": 0,"3": 0,"4": 0,"5": 0,"6": 0,"7": 0, "8": 0 },
    "1" :  { "0": 0,"1": 0,"2": 0,"3": 0,"4": 0,"5": 0,"6": 0,"7": 0, "8": 0 },
    "2" : { "0": 0,"1": 0,"2": 0,"3": 0,"4": 0,"5": 0,"6": 0,"7": 0, "8": 0 },
    "3" : { "0": 0,"1": 0,"2": 0,"3": 0,"4": 0,"5": 0,"6": 0,"7": 0, "8": 0 },
    "4" : { "0": 0,"1": 0,"2": 0,"3": 0,"4": 0,"5": 0,"6": 0,"7": 0, "8": 0 },
    "5" : { "0": 0,"1": 0,"2": 0,"3": 0,"4": 0,"5": 0,"6": 0,"7": 0, "8": 0 },
    "6" : { "0": 0,"1": 0,"2": 0,"3": 0,"4": 0,"5": 0,"6": 0,"7": 0, "8": 0 },
    "7" : { "0": 0,"1": 0,"2": 0,"3": 0,"4": 0,"5": 0,"6": 0,"7": 0, "8": 0 },
    "8" : { "0": 0,"1": 0,"2": 0,"3": 0,"4": 0,"5": 0,"6": 0,"7": 0, "8": 0 },

}  
var puzzle = [[5,3,0,0,7,0,0,0,0],
              [6,0,0,1,9,5,0,0,0],
              [0,9,8,0,0,0,0,6,0],
              [8,0,0,0,6,0,0,0,3],
              [4,0,0,8,0,3,0,0,1],
              [7,0,0,0,2,0,0,0,6],
              [0,6,0,0,0,0,2,8,0],
              [0,0,0,4,1,9,0,0,5],
              [0,0,0,0,8,0,0,7,9]]

function Sudoku(props) {
    return (

            <div>
                <Solution/>
                <div style={{ display:'flex', flexDirection:'column', textAlign: 'center',alignItems:'center',justifyContent:'center', alignContent:'center'}}>
                {
                    props.sudoku.map((column_data,row) => { 
                                                    return <RowData id = {row} row={row} column_data ={column_data}  />
                                              }
                                    )  
                }
                {console.log(props)}
                </div>
            </div>
  
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        sudoku: state.SudokuReducer.puzzle,
    }
}

export default connect(mapStateToProps)(Sudoku)