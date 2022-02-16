'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let array=str.split(" ");
    let res_str= array[Math.floor(array.length/2)];
    return res_str.length;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    let res=true;
    if(str1.length==str2.length){
    for(let i=0;i<str1.length;i++){
        let count=0;
        for(let j=0;j<str2.length;j++){
            if(str1.charAt(i)==str2.charAt(j)){
                str2=str2.substr(0,j)+str2.substr(j+1);
                count++;
                break;
            }
            else{
                
            }
            if(j==str2.length-1){
                if(count>=1){
                    
                }
                else{
                    res=false;
                    break;
                }
            }
        }
    }}
    else{
         res=false;
    }
    return res;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
  
    for(let i=0;i<arr.length;i++){
        if(int==arr[i]){
          return i;
          break;
        }
         else if(int<arr[i]){
        return i;
        
        }
        else if(i==arr.length-1){
            return i+(int-arr[i]);
        }
    }
   
    
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };