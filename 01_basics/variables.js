const accoundId=133
let accountEmail="amritanair37@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
//accoundId=138 //not allowed since const me declared hai 
console.log(accoundId);
accountEmail="amrita@gmail.com"
accountCity="punjab"
accountPassword=123
console.table([accoundId,accountEmail,accountPassword,accountCity])

//let const var mile tho memory me assign karo
//let and var me diff
//scoping problem in var that is {   }
//var me ek value change kiya and it is used in multiple files me use kiya 
//rahega tho sabme change hogaa
//prefer not to use var due to function and block scope
//if variable sirf declare karke chod diya tho print karenge tho value undefined aayega