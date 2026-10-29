let selectedColor = ['red', 'blue', 'green']
console.log(selectedColor);


// Create an arry with 3 fruits and print the second fruit.
let fruits = ["apple", "mango", "banana"]
console.log(fruits[1]);

// Add "Gauva" at the end and "Pineapple" at the begining of this array

fruits.push("Gauva")
fruits.unshift("Pineapple")
console.log(fruits);

//Replace "Gauva" with kiwi in the above arry

fruits.pop()
fruits.push("kiwi")
console.log(fruits);

// Remove the last item from this array using a method

let numbers = [1,2,3,4]
numbers.pop();
console.log(numbers);

// Insert Red and blue at index 1 in this array

let colors =["Green" , " Yellow" ]
colors.splice(1,0,"Red", "Blue")
console.log(colors);

// Extract only the middle 3 elements from this array

let items = [1,2,3,4,5,6];
let newarr= items.slice(1,4)
console.log(newarr);

// Sort this arry alphabetically and then reverse it

let names = ["Zara", "Arjun", "Mira", "Bhavya"]
names.sort().reverse();
console.log(names);

// Use.map() to square each number

let arr = [1,2,3,4]
let newarray = arr.map(function(val){
    return val * val;
})
console.log(newarray);

// Use .filter() to keep numbers greater than 10

let arra = [10,12,8,20,3]
let newarra = arra.filter(function(val){
    return val > 10;
})
console.log(newarra);

// Use .reduce() to find the sum of this array

let sum = arra.reduce(function(acc,val){
return acc + val;
},0)
console.log(sum);

// Use .find() to get the first number less than 10

let first = arra.find(function (val){
    return val < 10 ;
})
console.log(first);

// Use .some() to check if any student has scored below 35

let scored = [45, 60, 28, 90];
let ans= arr.some(function(val){
    return val < 35;
})
console.log(ans);

// User .every() to check if aal numbers are even 
let Even = [2, 4, 6, 8 ]
let Neweven = Even.every(function(val){
    return val % 2 === 0;
})
console.log(Neweven);

// Destructure this aaray to get firstName and lastName

let fullName = [ "Datta", "Shelke"]
let [firstName , lastName] = fullName ;
console.log(firstName);
console.log(lastName);

// Merge two arrays using spread operator

let a = [1,2];
let b = [3,4];

let c = [...a,...b]
console.log(c);

// Add India to the start of this array using spread

let countries = ["USA", "UK"]
 countries = ["India",...countries]
console.log(countries);

// Clone this array properly (not by reference)

let arr1 = [1,2,3];
let arr2 = [...arr1];
console.log(arr2)

function abc(){
    let a =22;
return function(){
    console.log(a);
}
}abc()();

let multiplly = (a,b) => {
    return a * b ;
}
console.log(multiplly(2,6))


for(let i =1 ; i<=10; i++)
{
    if(i%2===0){
         console.log(i + "Number is even");
    }
    else{
    console.log(i + "Number is odd");
    }
  
}

function largest(a,b,c){
    return Math.max(a,b,c);
}
console.log(largest(10,20,25));

let x = 10;
let y = 20;
[x,y] = [y,x]
console.log(x)
console.log(y)

function num(n){
let sum = 0;
for(let i = 1; i <= n; i++){
    sum += i;
}
return sum;

}
console.log(num(10));

function reversestr(str){
    return str.split("").reverse().join("")
}
console.log(reversestr("Datta"));
console.log("========================================");
let marks = [10,20,30,40,50,60]
marks[0] = 11;
for (let i = 0 ; i < marks.length; i++){
    console.log(marks[i]);
}
console.log(marks);
console.log(marks.length);
console.log(typeof marks)
console.log(marks[0]);

// for a given array with marks of students [85, 97, 44, 37, 76, 60]

let studMarks =  [85, 97, 44, 37, 76, 60];
let sum1 = 0;
for (let i of studMarks){
    sum1 = sum1 + i;
}
let avg = sum1 / studMarks.length;
console.log(avg);

// for a given array with prices of 5 items [250,645,300,900,50]

let item = [250,645,300,900,50];

let i = 0;
for(let val of item ){
    let offer = val / 10;
    item[i] = item[i] - offer;
   console.log("prices after offer " + item[i] );
    i++;
}

let item1 = [250,645,300,900,50];
for (let i = 0 ;  i < item1.length; i++)
{
    let offer = item1[i] / 10 ;
    item1[i] = item1[i] - offer;
}
console.log("Prices after offer: ", item1);

let array =[1,2,3,4,5,6,7];
array.splice(2,2,101,102);
console.log(array);

let arrays = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfilx"];
arrays.shift();
console.log(arrays);
arrays.splice(1,1,"Ola");
arrays.push("Amazone");
console.log(arrays)