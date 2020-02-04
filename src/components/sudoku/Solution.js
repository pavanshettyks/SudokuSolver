
import React from 'react'
import { connect } from 'react-redux';

function Solution(props) {

    const solver= () =>{
        console.log("trigger")
        props.solver();
    }
    return (

            <div onClick={solver}>
                <h1>Click to Solve</h1>
                <h5>{props.msg}</h5>

            </div>
  
    )
}
const mapStateToProps = (state) => {
    return {
        msg:state.SudokuReducer.msg
    }
}

const mapDispatchToProps = dispatcher =>{
    return {
        solver: () =>dispatcher({ type:'solver'})
        }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Solution)