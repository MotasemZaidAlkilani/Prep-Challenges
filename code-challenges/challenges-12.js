'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    const result=arr.filter(word=>word%2!=0);
    return result;
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]

//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    let array=[];
    let obj=[];
let res=arr.filter(value=>{
  if(value.yearsOfExperience>=5&&value.tech=="JS"){
      if(value.firstName==null){
          value["firstName"]="";
          return true;
      }
      else if(value.LastName==null)
       value["LastName"]="";
      return true;
  }else{
      return false;    }
})
   for(let i=0;i<res.length;i++){
       array={"fullName":res[i].firstName+" "+res[i].LastName,
               "tech":res[i].tech
       };
       obj.push(array);
   }
      
  return obj;
    
}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    let res=arr.filter(value=>{
    
        if(value.includes('a')||value.includes('o')||value.includes('e')||value.includes('i')||value.includes('u')){
             return false;
        }
        else{
            return true;
        }
          });
        
      
      return res;
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    let result_array=[];
     let equal_array=[];
     let final_array=[];
   let res1=arr1.filter(value=>{
       let count=0;
     return arr2.filter(v2=>{
         if(!value.includes(v2)){
             count++;
         }if(count==arr2.length){
            result_array.push(value);
     }     



     })
})
   let res2=arr2.filter(v2=>{
       let count2=0;
     return arr1.filter(value=>{
         if(!value.includes(v2)){
             count2++;
         }if(count2===arr1.length){
            equal_array.push(v2);
}     



     })
})
if(equal_array.length>=result_array.length){
    let length=equal_array.length;
}

 for(let i=0;i<result_array.length;i++){
   final_array.push(result_array[i])
     
 }
   for(let j=0;j<equal_array.length;j++){
   final_array.push(equal_array[j])
     
 } 
     
     
   
   return final_array;
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

