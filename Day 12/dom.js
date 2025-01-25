// let bgcolorelements=document.querySelectorAll('.bgcolor');

// [...bgcolorelements].map(element=>{
//     element.addEventListener("mouseover",()=>{
//         // console.log(element);
//         element.style.backgroundColor=element.innerText;
//     })
//     element.addEventListener("mouseout",()=>{
//         element.style.backgroundColor="white";
//     })
// })

let ele = document.createElement("h1");
ele.innerText= "dynamic creation of html element";
ele.setAttribute("id" , "demo")
console.log(ele);

document.body.apppendChild(ele);


let image = document.createElement("img");
image.src="";
comsole.log(image);
document.body.appendChild(image)