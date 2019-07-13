let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

myString = `Hello` + ' ' + `World`;
// `HELLO`.slice(0,3)
myNum = 8 + 8;
myBool = true;

console.log(myString);
console.log(myNum);
console.log(myBool)


//!arrays
// has to be an array of strings
let strArray: string[]
strArray = ['Hello', 'World']
//has to be an array of numbers
let numArray: number[]
numArray = [1,2,3]
//array of booleans
let boolArray: boolean[]
boolArray = [true, false, true]

//! the other way of writing arrays
let strArr2: Array<string>
strArr2: ['amber', 'jones']
///
let numArr2 : Array<number>
//
let boolArray2: Array<boolean>