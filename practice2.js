let i = 1;
for(i=1; i<=10; i++)
{
    console.log(i);
}

console.log(" ********************************** ");

let p = 10;
while(p>0)
{
    console.log(p);
    p--;
}

console.log(" ********************************** ");

let j=1;
for(j=1; j<=20; j++)
{
    if(j%2===0)
    {
    console.log(j);
    }
}
console.log(" ********************************** ");

let k=1;
while(k<=15)
{
    if(k%2===1){
        console.log(k);
       
    }
     k++;
}
console.log(" ********************************** ");

let x = 1;
for(x = 1 ; x<=10; x++)
{
    console.log(`5 * ${x} =  ${5 * x}`);
}

console.log(" ********************************** ");

let sum = 0;
for(let q=1; q<=100; q++)
{
    sum = sum + q;  
}
console.log(sum);

console.log(" ********************************** ");


let w = 1 ;
for ( w = 1; w <= 50; w++)
{
    if( w%3 === 0){
        console.log(w);
    }
}

console.log(" ********************************** ");

for (let i = 1; i<=100; i++)
{
    if (i % 3 ===0 && i % 5 ===0)
    {
        console.log(i);
    }
}

console.log(" ********************************** ");


for(let i = 1; i<=100; i++)
{
    console.log(i);
    if(i%7 == 0 )
    {
        break;
    }
}
console.log(" ********************************** ");


for(let i = 1; i<=20; i++)
{
    if ( i%3===0) continue;
    console.log(i);
}

console.log(" ********************************** ");
let count = 0 ;
for(let i = 1; i<=100; i++)
{
    if ( i%2===1){
        count++;
        console.log(i);
    }
    if (count===5)
        break;
}