let name = "Datta";
console.log(name);

let a = 10;
let b = 20;
let sum = a + b ; 
console.log(`sum = ${sum}`);

let age = 25;
let city = "Pune";
let learningJavaScript = true
console.log(age);
console.log(city);
console.log(learningJavaScript);

let x = 10;
x=25;
console.log(x);

console.log(10>5);
console.log(10===10)
let g = 10;
if(g > 0){
    console.log("positive number")
}else{
    console.log("negative number")
}

let num = 5;
if(num % 2 === 0)
{
     console.log(`${num} is even number`)
} else{
    console.log(`${num} is odd number`)
}

let Age = 25;
let isEligible = true;

if (Age>=18){
    console.log("person is eligible for vote");
}else{
    console.log("person is not eligible vote ");
}

let no = 0;

if (no>0){
    console.log("positive no.");
}else if(no<0)
{
    console.log("negative no. ");
}else{
  console.log("Number is Zero.");
}

let y = 25;
let z = 40;
if (y > z)
{
  console.log(y + " is the largest number"); 
}
else
{
     console.log(z + " is the largest number"); 
}

let marks = 66;
if(marks >= 90)
{
     console.log("Grade A"); 
}else if (marks >= 75)
{
    console.log("Grade B"); 
}else if (marks >= 60)
{
    console.log("Grade C"); 
}else{
    console.log("Grade D"); 
}

let day = 3;
switch(day) {
case 1: console.log(" Monday") ; 
break;
case 2: console.log(" Tuesday") ; 
break;
case 3: console.log(" Wednesday") ;  
break;
case 4: console.log(" Thursday") ;  
break;
case 5: console.log(" Friday") ; 
break;
case 6: console.log(" Saturday") ; 
break;
case 7: console.log(" Sunday") ; 
break;
default:
    console.log(" Invalid no.") ; 
}


let m = 10;
let n = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log(m + n);
        break;

    case "-":
        console.log(m - n);
        break;

    case "*":
        console.log(m * n);
        break;

    case "/":
        console.log(m / n);
        break;

    default:
        console.log("Invalid operator");
}

let month = 12;
switch(month) {
case 1: console.log(" Jan") ; 
break;
case 2: console.log(" Feb") ; 
break;
case 3: console.log(" Mar") ;  
break;
case 4: console.log(" April") ;  
break;
case 5: console.log(" May") ; 
break;
case 6: console.log(" June") ; 
break;
case 7: console.log(" July") ; 
break;
case 8: console.log(" Aug") ; 
break;
case 9: console.log(" Sept") ; 
break;
case 10: console.log(" Oct") ; 
break;
case 11: console.log(" Nov") ; 
break;
case 12: console.log(" Dec") ; 
break;

default:
    console.log(" Invalid no.") ; 
}

for (let i = 1; i <= 10; i++)
{
    console.log(i) ;
}
console.log("******************************") ;
for (let i = 1; i <= 50; i++)
{
    if ( i % 2 === 0)
    console.log(i) ;
}

console.log("******************************") ;
for (let i = 1; i <= 50; i++)
{
    if ( i % 2 === 1)
    console.log(i) ;
}

console.log("******************************") ;
let Total = 0;
for (let i = 1; i <= 10; i++)
{
    Total = Total + i;
}
console.log(Total) ;
console.log("******************************") ;
for (let i=1; i<=10; i++)
    {
      console.log(`5 * ${i} =  ${5 * i}`);
    }

    console.log("******************************") ;
    let number = 8;
for (let i=1; i<=10; i++)
    {
      console.log(`${number} * ${i} =  ${number * i}`);
    }
console.log("******************************") ;
    
let nums = 4;
let factorial = 1;

for (let i = 1; i <= nums; i++) {
     factorial = factorial * i;
}
console.log("Factorial of", nums, "=", factorial);

console.log("******************************") ;
let No = 123456789;
let reverse = " " ;
while(No > 0){
    let digit = No % 10;
    reverse = reverse + digit + " ";
No = Math.floor(No / 10);
}
console.log("Reversed number =", reverse);

console.log("******************************") ;
let numbers = 123456789;
let count = 0 ;
while(numbers > 0){
    count++
    numbers = Math.floor(numbers / 10);
}
console.log("Number of digits =", count);

let numb = 1234;
let total = 0;
while(numb > 0)
   
{
    let digit = numb % 10;
    total = total + digit;  
    numb = Math.floor(numb / 10);
}
console.log(total);

let Num = 123456;
let counts= 0;
while(Num > 0)
{
    let digit = Num % 10;

    if (digit % 2 === 0)
    {
counts++;
    }
    Num = Math.floor(Num/10);
}
console.log("Even digits =", counts);

let Nums = 123456;
let countss= 0;
while(Nums > 0)
{
    let digit = Nums % 10;

    if (digit % 2 === 1)
    {
countss++;
    }
    Nums = Math.floor(Nums/10);
}
console.log("Odd digits =", countss);


let Numss = 1234586;
let largest = 0;

while (Numss > 0) {
    let digit = Numss % 10;

    if (digit > largest) {
        largest = digit;
    }

    Numss = Math.floor(Numss / 10);
}

console.log("Highest digit =", largest);

let Numsss = 9879425;
let smallest = 9;

while (Numsss > 0) {
    let digit = Numsss % 10;

    if (digit < smallest) {
        smallest = digit;
    }

    Numsss = Math.floor(Numsss / 10);
}

console.log("Smallest digit =", smallest);


function getScore(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;

    });
    return total;

}
console.log(getScore(10,12,15,18));


function abcd(val){
    val();
}
abcd(function(){
    console.log("Hey");
});


// Write a BMI calculator 

function BMI(weight , height){
    return weight / (height * height);
}
console.log(BMI ( 69, 1.7).toFixed(2));

function discountCalculator(discount){
    return function(price){
        return price - price * (discount / 100);
    };
}
let discounter = discountCalculator(10);
console.log(discounter(200));