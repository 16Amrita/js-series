// console.log(2>1)
// //make sure that the comparsion is between same datatypes
// //bcs sometimes unpredictable outputs
// console.log("2" > 1)
// console.log("02"<1)
//here it automatically converted to number

console.log(null>0)  //isme false aayega bcs first it is conv to number then compared
console.log(null>=0)
console.log(null==0) //does equality chcek

//strict check 
//=== checks the datatype along with the value
console.log(null===0)
console.log("2"===2)

//comparison with underfined will always be false
