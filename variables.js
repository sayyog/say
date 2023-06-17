//variable

var a = 'sayli';
console.log(a);

let b = 8;
console.log(b)
var a ='sai';
console.log(a)

const name="Vidhi"

//Map Filter Reduce

//map()

let arrOne=[10,67,78,34,29]

let arrTwo= arrOne.map((val,i,array)=>{
    console.log(val,i)
    return val*6;
})
console.log(arrTwo)

//filter()

let filtArray=[8,6,98,89,76,56]

let data = filtArray.filter((val,i,arr)=>{
    return(val>50)
})
console.log(data)

//reduce()

let arrReduce=[34,67,67,87,45,98]

let result = arrReduce.reduce((h1 , h2)=>{
    return h1+h2;
})

console.log(result)


//Normal Function

function add(val1 , val2){
    return val1+val2;
}

let res = add(20,20)
console.log(res)

//arrow function
let c = (a,b) =>{
console.log(a + b)
}

c(99,78)

//we can also write arrow function by following way

let sayhello = ()=>{
    console.log('say helloo')
}

let sayHello = () => console.log('dhdhhd')

//this keyword in normal function vs this keyword in arrow function

const studDetails = {
    name:'sayli',
    class:'BE',
    address:'pune',
    contact:878276767,
    getStud: function(){
        console.log(this)
       setTimeout(() => {
        console.log(this)
       }, 2000);
    }
}
studDetails.getStud()
