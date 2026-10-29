let x=10;
let y=20;
if (x>5 && y<25)
{
    console.log("print A")
} else
{
    console.log("print B")
}

let isAdmin = true;
let isLoggedIn= false;
if (isAdmin || isLoggedIn)
{
    console.log("Access granted");
}else{
    console.log("Access denied");
}

let temp =35;
if (!(temp < 30))
{
    console.log("hot");
}
else{
    console.log("Pleasent");
}

let a =0;
if (a){
console.log("Truthy");
}else{
    console.log("Falsy");
}

let score =78;
let grade = score >=90 ? "A" : score>=75 ? "B" : score >=60 ? "C" : "Fail";
console.log(grade);

let points = 120;

let status = points >100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
console.log(status);

let points1 = 20;

let status1 = points1 >100 ? "Gold" : points1 > 50 ? "Silver" : "Bronze";
console.log(status1);

let logged=true;
let hasToken = false;
let access = logged && hasToken ? "Allow" : "Deny";
console.log(access);

let B = 5;
B++;
console.log(B);

let p = 7;
++p;
console.log(p);

let q = 3;
let r = q++;
console.log(q,r);

let c = 3;
let d = ++c;
console.log(c,d);

let n = 5 ;
let result = n++ + ++n;
console.log(result);

let s = 4;
console.log(s++ + s++);