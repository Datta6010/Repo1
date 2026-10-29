let i=1;
for (i=1; i<=10; i++)
{
    console.log(i)
}

console.log("***************************");

let p=1;
while(p<=32)
{
    console.log(p);
    p++;
}
console.log("***************************");
let q=12
do{
    console.log(q);
    q++
}
while(q<=2)

console.log("***************************");

for (let i=1; i<=100; i++)
{
    console.log(i);
    if (i===15){
        break;
    }

}
console.log("***************************");

for (let i=1; i<=25; i++)
{
    if (i===15){
        continue;
    }
    console.log(i);

}