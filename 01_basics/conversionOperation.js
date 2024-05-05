// let score=33  
// console.log(typeof score)

//now lets convert string to number
// let number="33"
// console.log(number)
// console.log(typeof number)
// let scoreNum=Number(number)
// console.log(typeof scoreNum)

//diff cases
// let num1="33ab"
// let convNum=Number(num1)
// console.log(typeof convNum) //this should not be converted to number
// console.log(convNum) //Nan value aaya(not a number)

// let num2=null
// let convNum1=Number(num2)
// console.log(typeof convNum1) 
// console.log(convNum1) 
//undefined ka bhi nan aayega and boolean ka true ka 1 aayega 
//string ka bhi nan aayega 

//"33"=> 33
//"33abc"=> Nan but type is number

// let isLoggedIn=1
// let bool=Boolean(isLoggedIn)
// console.log(bool)

// let string="" //filled string ka true aayega empty ka false
// let bool1=Boolean(string)
// console.log(bool1)

// let someNum=99
// let stringNum=String(someNum)
// console.log(typeof stringNum)

// let val=3
// let negVal=-val
// console.log(negVal)
// //2 strings ko jodne ke liye +
// console.log(typeof("1" + 2))
// console.log(typeof(1 + "2"))
// console.log("1" + 2 + 2)
// console.log(typeof("1" + 2 + 2)) //converts it into string since start me string hai 

// console.log(1+2+"2") //idar converts into string but pehle operation hoke
// console.log(typeof(1+2+"2"))

// console.log(+true)
// console.log(+false)
// console.log(+"")

// let num1,num2,num3
// num1=num2=num3=2 + 2 //not preferred
let gameCounter=100
//gameCounter++
++gameCounter
console.log(gameCounter)

//no changes in ans but there are changes in prefix and postfix operators in js
//refer mdn


