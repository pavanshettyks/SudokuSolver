import React from 'react'
import Solution from './Solution'
import RowData from './RowData'
const sudoku_matrix = {
    "0" : { "0": {isFixed:"False",value:"" },"1": {isFixed:"False",value:""  },"2": { isFixed:"False",value:"" },"3": {isFixed:"False",value:""  },
            "4": { isFixed:"False",value:"" },"5": {isFixed:"False",value:""  },"6": {isFixed:"False",value:""  },"7": { isFixed:"False",value:"" },
            "8": {isFixed:"False",value:""  } },
    "1" :  { "0": {isFixed:"False",value:"" },"1": {isFixed:"False",value:""  },"2": { isFixed:"False",value:"" },"3": {isFixed:"False",value:""  },
            "4": { isFixed:"False",value:"" },"5": {isFixed:"False",value:""  },"6": {isFixed:"False",value:""  },"7": { isFixed:"False",value:"" },
             "8": {isFixed:"False",value:""  } },
    "2" : { "0": { },"1": { },"2": { },"3": { },"4": { },"5": { },"6": { },"7": { }, "8": { } },
    "3" : { "0": { },"1": { },"2": { },"3": { },"4": { },"5": { },"6": { },"7": { }, "8": { } },
    "4" : { "0": { },"1": { },"2": { },"3": { },"4": { },"5": { },"6": { },"7": { }, "8": { } },
    "5" : { "0": { },"1": { },"2": { },"3": { },"4": { },"5": { },"6": { },"7": { }, "8": { } },
    "6" : { "0": { },"1": { },"2": { },"3": { },"4": { },"5": { },"6": { },"7": { }, "8": { } },
    "7" : { "0": { },"1": { },"2": { },"3": { },"4": { },"5": { },"6": { },"7": { }, "8": { } },
    "8" : { "0": { },"1": { },"2": { },"3": { },"4": { },"5": { },"6": { },"7": { }, "8": { } }

}  
export default function Sudoku() {
    return (

            <div>
                <Solution/>
                <div style={{ display:'flex', flexDirection:'column', textAlign: 'center',alignItems:'center',justifyContent:'center', alignContent:'center'}}>
                {
                    Object.entries(sudoku_matrix).map((column_data,row) => { 
                                                    return <RowData id = {row} row={row} column_data ={column_data}  />
                                              }
                                    )  
                }
                </div>
            </div>
  
    )
}
