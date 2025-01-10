//without parameters


// function demo(){
//     console.log("function is executing.....");
// }
// demo();
// demo();


//function with parameter
//let a = 10; //a=parameter

// function add(a,b){
//     console.log(a);
//     console.log(b);
// }
// add(5,6);

//named function

// function test(){
//     console.log("named function is executing.....");
// }
// test();





// //anoymus function declaring function with out name

// function(){

// }
// ();//it can't be executing


// function expression
// let a = 10;
// let x = function(){
//     console.log("anonymus is not executing but executing with varaible");

// }
// x();

//IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )();

//arrow function

// function demo(){

// }
// demo(); basic function struture

// let x =_=>{console.log("arrow function");};
// x();

// let x =_=>console.log(6);
// x();

// let x =(a,b)=>{console.log(a,b);};
// x(5,6);

// function demo(a){
//     console.log("Hello");
// }
// demo();


// let x= ()=>console.log("Arrow Function");
// x();

// let x = a => console.log(a);
// x(4);


// /////implicit returns and explicit return
// to return expression we use this return function
// function test1(a,b){
//     return a+b;
// }
// console.log(test1(5,5));// important


// let x = (a,b)=>{return a*b};
// console.log(x(100,200));

// let y = (a,b)=>a+b;
// console.log(x(500,200));

// function test2(a,b){
//     console.log("Hello i am  printing after return keyword");
//     return a=b;
//     console.log();

// }

// higher order function

// function hof(a){//higher order fucntion
//     return a();
// }
// let x = hof(function(){return "1,2,3"});//callback is a function which determine tis data syntax 
// console.log(x);


// let y = function(){return "NO Data"};
// console.log(y());

let users = ["Manohar", "Satvik", "Shiva", "Akshay"];
console.log(users);
users.map((users)=>{
    console.log(users);// Map is higher order method which is accepting another function as a value
})

//**Closure**
// var a = 10;
// let b= 45;
// function x(){
//     var user = "Vasanth";
//     let company = "Google";
//     const sal = 1234567890;
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a, b);
// }
// x()


