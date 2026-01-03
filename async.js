// IIFE --> immediately invoked fuciton expression
(function(){
    // console.log("Automatically call");
})();

function api() {
    return new Promise ((resolve , reject) => {
        setTimeout(()=>{
        console.log("weather data");
        resolve(200);
        }, 2000);
    });
}

// async function printData() {
//     await api();
//     await api();

// }

const getData = (dataId) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(dataId);
            resolve('SUcess');
        }, 2000);
    });
}

//using async - await
// async function getAllData(){
//     console.log("Getting data1!")
//     await getData(1);

//     console.log("Getting data2!")
//     await getData(2);

//     console.log("Getting data3!")
//     await getData(3);

//     console.log("Getting data4!")
//     await getData(4);

//     console.log("Getting data5!")
//     await getData(5);

//     console.log("Getting data6!")
//     await getData(6);
// }


// Using IIFE to directly call during definition
// (async function getAllData(){
//     console.log("Getting data1!")
//     await getData(1);

//     console.log("Getting data2!")
//     await getData(2);

//     console.log("Getting data3!")
//     await getData(3);

//     console.log("Getting data4!")
//     await getData(4);

//     console.log("Getting data5!")
//     await getData(5);

//     console.log("Getting data6!")
//     await getData(6);
// })();



//using callback hell(nested callbacks), difficult to understand
// getData(1, () => {
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         });
//     });
// });


// // using promise 
// console.log("Fetching data1")
// getData(1).then((res) => {
//     // console.log(res);
//     console.log("Fectching data2: ");
//     getData(2).then((res) => {
//         // console.log(res)
//         console.log("Fetching data3");
//         getData(3).then((res) => {
//             // console.log("res");
//         });
//     });
// });


// //using promise chain
// console.log("Fetching data1!");
// getData(1).then((res) => {
//     // console.log("res");

//     console.log("Fetching data2!");
//     return getData(2);
// }).then((res)=>{
//     // console.log(res);

//     console.log("Fetching data3!");
//     return getData(3);
// }).then((res) => {
//     // console.log(res);
// });

