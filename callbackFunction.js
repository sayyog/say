//callbackFunction example

function myDetails(arg){
    console.log('My First Function Called')
    arg();
}

function callbackFun(){
    console.log('Callback function called')
}

myDetails(callbackFun);
//callbackFun function passed to another function as parameter 
//it execuited after first function execution
//do not use paraenthethis when we passed function as parameter

//example second

function Calculation(a,b,callBack){
let sum = a*b/2
callBack(sum);

}

function diplyCalResult(res){
    console.log('result of above calculation is', +res)
}

Calculation(45,78,diplyCalResult)

//async / await example

async function getData(){
    return 7;
}

//async function always return promise
//received promise result
getData().then((x=>{
    // alert(x)
}))

//example 2

async function demo(){
    console.log('Welcome to weather control Room')

    let delhiWheather = new Promise((res,rej)=>{
        setTimeout((data) => {
          res('45 Deg')  
        }, 1000);
    })

    let mumbaiWheather = new Promise((res,rej)=>{
        setTimeout((data) => {
          res('55 Deg')  
        }, 5000);
    })
    console.log('Delhi Weather')
    let d = await delhiWheather;
    console.log('Delhi Weather fetch successfully')
    
    console.log('Mumbai Weather')
    let m = await mumbaiWheather;
    console.log('Mumbai Weather fetch successfully')
}

let aa = demo()
console.log(aa)