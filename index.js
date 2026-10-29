
/* Variables */

let name ='Datta';
console.log(name);

/* primitive data types */

let Name = 'Datta';// this is string 
let age = 25; // this is number
let isApproved= true;// this is boolean
let firstName = undefined; // this is undefined data type
let selectColor = null;//this is null data type

/* Reference types    */
// There are three types 1. object 2. array 3. function

let person = {
name: 'Datta',
age: 25
};
person.name ='Vikas';
console.log(person.name);

console.log(" ************************** ");


// let val = prompt("give a number");
// for (let c = 1; c <= val; c++)
// {
//    if(c%2 ===0)
//     {
//         console.log(` ${c} is even`);
//     } else{
//         console.log(  `${c}  is odd `);
//     }
// }

function getScore(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;

    });
    return total;

}
console.log(getScore(10,12,15,18));

let str = prompt ("enter name")
let result = str.replace(/o/g, "#");
console.log("Output:", result)