/*
  https://leetcode.com/problems/pascals-triangle/
*/

var generate = function(numRows) {
    if(numRows == 0) {
        return [[]]
    }
    else if(numRows == 1) {
        return [[1]]
    }
    else if(numRows == 2) {
        return [[1], [1, 1]]
    }
    else {
        let TwoDArray = [[1], [1, 1]]

        for(let i = 2; i < numRows; i++) {
            let OneDArray = []
            for(let j = 0; j < (i+1); j++) {
                if(j == 0) 
                    OneDArray.push(1)
                else if(j == i) 
                    OneDArray.push(1)
                else
                    OneDArray.push(TwoDArray[i - 1][j - 1] + TwoDArray[i - 1][j])
            }
            TwoDArray.push(OneDArray)
        }
        return TwoDArray
    }
};
