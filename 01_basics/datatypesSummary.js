//datatypes is divided into two types based on the way the data is stored in the memory and how you can access them 
//primitive and non primitive
//primitive-call by value
//when we copy this kind of data the reference is not given from the original memory the changes made are done on the copy not the original one
//7 types: String,Number,Boolean,null,undefined,Symbol(value ko unique banane ke liye use karte),BigInt

//reference type or non primitive
//memory ka direct reference
//array,objects and functions

//js is dynamically typed meaning alag se variable ka type define karna nahi padta

// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId) //false bcs it makes the output (datatype) unique

const bignumber=9293284248n //uses bigInt to store it
console.log(typeof bignumber) //n is used to denote that it is bigInt

const heros=["shaktiman","superman","spiderman"] //array
//objects
let obj={
    name:"amrita",
    age:21
}

const myFunc=function(){  //function stored in a variable
    console.log("Hello World")
}
console.log(typeof heros)
console.log(typeof obj)
console.log(typeof myFunc) //function object 
//non primitive datatypes ka datatype object aayefa
