const UIControls = {
    ShowAddUser: false,
    add_user_name:'',
    Filter_Event_Name:'',
    Filter_UID:'',
    Filter_Location:'',
    Filter_Staff:'',
    Filter_Date: '',
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

        case 'FilterValue':
            // / console.log(action.target,"",action.value)
                return {...state,[action.target]:action.value}
        
        case 'updateValue':
            console.log(action.new_data)
            return { ...state}

        default:
                
        return state
    }
}


export default SudokuReducer;