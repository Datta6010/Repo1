function myFirst(){
    console.log("Hello");

}
function mySecond(){
    console.log("Goodbye");
}
myFirst();
mySecond();

let a = "10";
let b = 5;
console.log(a - b + a);


let x = 6;
let y = 4;
if (x > y){
    x -= 2;
    y += 3;
}
console.log(x * y );

let result = 1;
for (let i = 1; i <= 4; i++){
result *= i;
}
console.log(result);


const arr = [10,20,30,40];
const arr1 = [20,40,50];

const result1 = arr.filter(num => ! arr1.includes(num));  
console.log(result1);

let nums = [2,7,11,15];
let target = 18;

let map={};
for (let i = 0; i<nums.length; i++){
    let diff = target - nums[i];
    if (map [diff] !== undefined){
        console.log("Indexes:", [map[diff],i]);
    }
    map[nums[i]] = i;
}

