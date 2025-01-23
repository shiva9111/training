// // let p1 = new Promise((resolve , reject)=>{});
// // console.log(p1);

// // let p2 = new Promise((resolve , reject)=>{
// //     resolve("Success");
// // });
// // p2.then((res)=>{
// //     console.log(res);
// // }).catch(err=>console.log("final"))
// // // console.log(p2);

// // let p3 = new Promise((resolve , reject)=>{
// //     reject("Failures");
// // });

// // p3
// // .then(res=>console.log(res))
// // .catch(err=>console.log(err))
// // .finally(()=>console.log("final"))
// // console.log(p3);

// // API FETCHING

// function fetchUsers()
// {
//     let x = fetch("https://jsonplaceholder.typicode.com/users")
//     // console.log(x);
//     x.then(res=>{
//         return res.json().then(data=>{
//             let store = document.getElementById("store");
//             data.map(user=>{
//                 console.log(user)
//                 store.innerHTML +=
//             })
//             // console.log(data)
//         })
//     })
//     .catch(err=>console.log(err))
    
// }
// fetchUsers();