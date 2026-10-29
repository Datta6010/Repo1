function abcd(a,b,c,...val){
    console.log(a,b,c,...val)
}
abcd(1,2,3,4,5,6);

function add(...numbers){
    console.log(numbers);
}
add(10,20,30,40,50)

// function OddorEven(...num){
//     for (let n of num){
//     if(n%2===0){
//         console.log(n, "Even Numbers")
//     }
//     else{
//         console.log(n, "Odd Numbers")
//     }
// }
// }
// OddorEven(1,2,3,4,5,6,7,8,9,10)




function OddorEven(...num) {
    let even = [];
    let odd = [];

    for (let n of num) {
        if (n % 2 === 0) {
            even.push(n);
        } else {
            odd.push(n);
        }
    }

    console.log("Even Numbers:", even);
    console.log("Odd Numbers:", odd);
}

OddorEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Task: Use a rest parameter ...num to separate even and odd numbers into two arrays.
function separateNumbers(...num){
    let even = [];
    let odd = [];
    for (n of num)
    if (n %2===0){
        even.push(n);
    } else{
        odd.push(n)
    }
    console.log("Even Numbers", even)
    console.log("Odd numbers", odd)
}
separateNumbers(12, 7, 4, 9, 15, 20, 3, 8);

//Write a function that finds the largest number from the given arguments.

function findLargest(...num){
    let largest=num[0];
    for (let n of num){
        if(n > largest){
            largest = n;
        }
    }
    return largest;
}
console.log(findLargest(12, 45, 7, 89, 23));

function largestNumber(...num){
    return Math.max(...num)
}
console.log(findLargest(12, 45, 7, 90, 23));

function findSmallest(...num){
    let smallest = num[0]
    for( let n of num){
        if (n < smallest){
            smallest = n;
        }
    } return smallest;
}
console.log(findSmallest(12, 45, 7, 89, 23));

function smallNumber(...num){
    return Math.min(...num)
}
console.log(smallNumber(12, 45, 7, 89, 23))

// find the second largest numbers 
function secondLargest(...num) {
    let largest = -Infinity;
    let secondLarge = -Infinity;

    for (let n of num) {
        if (n > largest) {
            secondLarge = largest;
            largest = n;
        } else if (n > secondLarge && n < largest) {
            secondLarge = n;
        }
    }

    return secondLarge;
}

console.log(secondLargest(12, 45, 7, 89, 23));

// count even and odd numbers

function countNumbers(...num){
    let evenCount = 0;
    let oddCount = 0;

    for (let n of num){
        if (n %2 ===0){
            evenCount++;
        }else {
            oddCount++;
        }
    }

    console.log("Even count:", evenCount);
    console.log("odd counts:", oddCount);
}
countNumbers(1,2,3,4,5,6,7)

//Write a function that counts how many numbers are greater than 10.
function countGreater(...num){
    let countGreater = 0;
    for (let n of num){
        if (n > 10){
            countGreater++;
        }
    }
     console.log("Greater than 10:", countGreater);
}
countGreater(5, 12, 25, 8, 15, 3);
//Separate positive, negative, and zero numbers into three arrays.
function separateNumber(...num){
    let positive = [];
    let negative = [];
     let zero = [];
    for (let n of num){
    if (n > 0){
        positive.push(n);
    } else if (n < 0){
        negative.push(n)
    }else{
        zero.push(n)
    }
}
    console.log("Positive Numbers", positive)
    console.log("Negative numbers", negative)
    console.log("Zero numbers", zero)
}

separateNumber(10, -5, 8, -2, 0, 7, -9);

//Write a function called findDuplicates(...num).
function findDuplicates(...num){
    let seen = [];
    let duplicates =[];
    for (let n of num){
        if(seen.includes(n) && !duplicates.includes(n)){
            duplicates.push(n);
        }else if (!seen.includes(n)){
            seen.push(n);
        }
    }
console.log("Duplicates numbers:", duplicates)
}
findDuplicates(1, 2, 3, 2, 4, 5, 1, 6,1);
//Find the frequency of each number in an array.
function countFrequency(...num){
let frequency = {};
for (let n of num){
    if (frequency[n]){
        frequency[n]++;
    } else {
        frequency[n]=1;

    }
}
for (let n in frequency){
    console.log(n + " appears " + frequency[n] + " times");
}
}
countFrequency(1, 2, 2, 3, 1, 1, 4);
//Write a JavaScript function to find the largest even number in the given input.

function findLargestEven(...num){
    let largestEven = -Infinity;
    for(let n of num){
        if ( n %2 === 0 && n > largestEven ){
            largestEven = n;
        }
    }
        if (largestEven === -Infinity) {
        return "No even number found";
    }
    return largestEven;
}
console.log(findLargestEven(3, 5, 7, 9));
console.log(findLargestEven(3, 8, 11, 14, 5, 20, 7));

// Write a function to reverse a string without using .reverse().

function reverseStr(str) {
    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--){
         reversed = reversed + str[i];
    }

    
    return reversed;
}

console.log(reverseStr("javascript"));

// count the vowels in the string 

function countVowels(str){
let count = 0;
for(let i = 0; i < str.length; i++){
 if("aeiou".includes(str[i])){
    count++;
 }
}
return count;
}
console.log(countVowels("javascript"));
console.log(countVowels("education"));