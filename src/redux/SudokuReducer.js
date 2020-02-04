import solver  from './solver'
const UIControls = {

    msg: '',
    puzzle : [[5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]]
}
const SudokuReducer = (state = UIControls, action) => {

    switch (action.type) {

        case 'solver':
             if(!solver(state.puzzle)){
                //console.log("fail")
                state.msg = "No Solution Exists";
                return { ...state,msg:state.msg}
            }  
            else{
                console.log(state.puzzle)
                let test = state.puzzle.map((row,i) => {
                    let new_row = row.map((title,j)=>{
                        return title
                    }
                    );
                    return new_row;
                });
                state.msg = "Here is the solution";
                return {...state,puzzle:test,msg:state.msg}
            }

        
        case 'updateValue':
            let row1 = action.new_data.row;
            let column = action.new_data.column;
            let value = action.new_data.value ;
            
            if(value < 0 ||value > 9){
                //console.log(action.new_data)
                //console.log("fail")
                return { ...state}
            }  
            else{
                let test = state.puzzle.map((row,i) => {
                    let new_row = row.map((title,j)=>{
                        if(i === row1 && j === column)
                            return parseInt(value);
                        return title
                    }

                    );
                    return new_row;
                });
                return {...state,puzzle:test}
            }

        default:
                
        return state
    }
}


export default SudokuReducer;