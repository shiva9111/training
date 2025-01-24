// // let element = document.getElementById("demo");
// // console.log(element);

// let ele = document.getElementsByClassName("test")
// ele[0].style.backgroundColor ="dodgerblue"

// // console.log(ele)
// // console.log(Array.isArray(ele)); // this method used to check whether the array is pure

// //! spread operator;- this operator is used to take out each and every value from original array 
// // and store it in one more new array(pure array)

// // syntax of spread -   [...variable]

// // let x = [...ele]
// // console.log(x, Array.isArray(x))
// // x.map(element => {
// //     element.style.backgroundColor = "tomato"
// //     element.style.color =  "white"
// //     element.style.textTransform = "uppercase"
// // })




// let element=document.getElementById("demo")
// element.innerHTML="DOM"
// element.innerText="DOM"
// console.log(element)/

// let test=document.getElementById("test")
// test.innerHTML="<h1>Header</h1>"
// console.log(test)

// let ele=document.getElementsByClassName("test")
// console.log(ele);
// console.log(Array.isArray(ele)); //this method is used to check 
//whether given array is pure array or not
//spread operator is used to convert impure array to pure array

// let x=[...ele]
// // console.log(x);
// x.map((element)=>{
//     console.log(element);
//     element.style.backgroundColor="tomato"
//     element.style.color="white"
//     element.style.fontSize="20px"
//     element.style.margin="10px"
//     element.style.padding="10px"
//     element.style.borderRadius="10px"
//     element.style.border="2px solid black"
//     element.style.textAlign="center"
//     element.style.boxShadow="5px 5px 5px black"
//     element.style.textTransform="uppercase";
// })  

let ele = document.querySelectorAll(".test");
console.log(ele);