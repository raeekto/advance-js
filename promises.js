// promises
// it is for 'eventual' completion of task. it is an object in JS
// it is solution of callback hell

// let promise = new Promise((resolve, reject)=>{...})

// let promise = new Promise((resolve, reject)=>{
//     console.log(" I am a promise.");
//     // resolve("success");
//     reject("some error");
// })


function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("data = ", dataId);
    resolve('success');
    if(getNextData) {
        getNextData();
    }
    }, 6000);
});
}

// let promise = getData(123);