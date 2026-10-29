//Array is a collection of elements it is stored the elements 

var marks = Array(6)

var marks = new Array(20,40,35,12,37,100)

var marks = [20,40,35,12,37,100]
subMarks=marks.slice(2,5)
console.log(subMarks)//[35,12,37]

console.log(marks[2])//35
marks[3] =14
console.log(marks)//[20,40,35,14,37,100]
console.log(marks.length)//6

marks.push(65)
console.log(marks)//[20,40,35,14,37,100,65]
marks.pop()//[20,40,35,14,37,100]
marks.unshift(12)//[12,20,40,35,14,37,100]
console.log(marks)

console.log(marks.indexOf(100))

//120in the array 

console.log(marks.includes(100))
var sum =0
for (let i =0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum = sum + marks[i]
}
console.log(sum)
//reduce filter map

let total =marks.reduce((sum,mark)=> sum+mark,0)
console.log(total)
var scores = [12,13,14,16]
// create new array with even numbers of scores array [12,14,16]

var evenScores=[]
for (let i =0;i<scores.length;i++)
{
    //console.log(marks[i])
    if (scores[i]%2==0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

let newFilterEvenScores=scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)

//map array function
let mappedarray=newFilterEvenScores.map(score=>score*3)
console.log(mappedarray)
let totalvalue=mappedarray.reduce((sum,val)=>sum+val,0)
console.log(totalvalue)
var scores1 = [12,13,14,16]
let sumValue= scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,mark)=> sum+mark,0)
console.log(sumValue)