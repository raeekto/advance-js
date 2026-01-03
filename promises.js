// promises
// it is for 'eventual' completion of task. it is an object in JS
// it is solution of callback hell

// let promise = new Promise((resolve, reject)=>{...})

// let promise = new Promise((resolve, reject)=>{
//     console.log(" I am a promise.");
//     // resolve("success");
//     reject("some error");
// })


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     console.log("data = ", dataId);
//     resolve('success');
//     if(getNextData) {
//         getNextData();
//     }
//     }, 6000);
// }); 
// }



// const getPromise = () => {
//     return new Promise((resolve, regect) => {
//         console.log("I am a promise.");
//         // resolve("SUCCESS");
//         // regect("wrong");
//     });
// };

// let promise = getPromise();

// promise.then((res)=>{
//     console.log("Promise fullfilled",res);
// });

// promise.catch((err)=>{
//     console.log("reject", err);
// })





// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("This is ");
//             resolve("success");
//         }, 2000);
//     });
// }

// let p = asyncFunc();
// console.log("Fetching data1");
// p.then((res)=>{
//     console.log(`${res} data1`);
// });






//Working in parraell
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("This is ");
//             resolve("success");
//         }, 2000);
//     });
// }


// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("This is ");
//             resolve("success");
//         }, 2000);
//     });
// }


// let p1 = asyncFunc1();
// console.log("Fetching data1");
// p1.then((res)=>{
//     console.log(`${res} data1`);
// });


// let p = asyncFunc2();
// console.log("Fetching data2");
// p.then((res)=>{
//     console.log(`${res} data2`);
// });






//promise chain

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("This is data 1");
            resolve("success");
        }, 2000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("This is data 2");
            resolve("success");
        }, 2000);
    });
}


console.log("Fetching data1");
asyncFunc().then((res)=>{
    // console.log(`${res} data1`);
    console.log("Fetching data2");
    asyncFunc2().then((res) => {
        // console.log(`${res} data2`);
    });
});