const isSolution = (puzzle) =>{
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(puzzle[i][j]===0){
                return false;
            }
        }
    }    
    return true;
}

const missingValues = (puzzle) => {
    var x = [];
    for(let i=1;i<=9;i++){
         if(!puzzle.includes(i)){
             x.push(i)
        }     
    }
       
    return x
}

const check_row =(rowData,value) =>{
    for(let i=0;i<9;i++){
        if(rowData[i]===value)
            return true
    }
    return false
}



const isValidPosition = (puzzle,value,x,y) =>{
    //matrix = np.array(puzzle)
    if(check_row(puzzle[x],value))
        return false

    var matrix = puzzle[0].map((col, i) => puzzle.map(row => row[i]));
    if(check_row(matrix[y],value))
        return false
    let xx, yy;
    if(x <3)
        xx = 0
    else if(x < 6)
        xx =3
    else
        xx =6
    if(y <3)
        yy = 0
    else if( y < 6)
        yy =3
    else
        yy = 6
     for(var i=xx;i<xx+3;i++){
        for(var j=yy;j<yy+3;j++){
            if(value === puzzle[i][j]){
                return false
            }
        }
    }
    return true
}

const check_prev_elements =(rowData,index) =>{
    for(var i=0;i<index;i++){
        if(rowData[i] === 0)
            return true
    }
    return false
}

const solution = (puzzle,row) => {
            

            if(isSolution(puzzle)){
                return true;
            }
            for(var i=0;i<9;i++){
                var missing_values = missingValues(puzzle[i]) ;    
                if(i >0 && puzzle[i-1].includes(0)){
                   return false;
                }
                for(var j=0;j<9;j++){
                        if(puzzle[i][j] === 0){
                            for(let value in missing_values){
                                
                                if(isValidPosition(puzzle,missing_values[value],i,j)){                  
                                    if(check_prev_elements(puzzle[i],j)){  
                                        
                                        return false;
                                        
                                    }
                                    puzzle[i][j] = missing_values[value]
                                     if(solution(puzzle,row+1)){
                                         return true;
                                     }
                                    else{
                                        puzzle[i][j] = 0
                                    }
                              }
                            }
                       }
                }
                
        }
            
    
    return false

}

const solver = (puzzle) =>{
    if(solution(puzzle,0)){
        return true
    }
    else
        return false
}
export default solver;