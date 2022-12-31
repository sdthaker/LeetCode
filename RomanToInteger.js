/*
  https://leetcode.com/problems/roman-to-integer/
*/

var romanToInt = function(s) {
    let romanChars = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    let number = 0

    for (let i = 0; i < s.length; i++) {
        if(
        (s[i] == 'I' && s[i+1] && (s[i+1] == 'V' || s[i+1] == 'X'))
        || (s[i] == 'X' && s[i+1] && (s[i+1] == 'L' || s[i+1] == 'C')) 
        || (s[i] == 'C' && s[i+1] && (s[i+1] == 'D' || s[i+1] == 'M')) 
        ) {
            number += (romanChars[s[i+1]] - romanChars[s[i]])
            ++i
        }
        else {
            number+= romanChars[s[i]]
        }
    }

    return number
};
