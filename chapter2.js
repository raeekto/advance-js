function prod(a, b) {
    // console.log(a * b);
}

function calculator(a, b, prodFunc) {
    prodFunc(a , b);
}

calculator(2, 3, prod);   //prod is callback function


//OR
function calculator2(a, b, sumFunc) {
    sumFunc(a * b, b);
}
calculator2(3,4, (a, b) => {
    // console.log(a + b)
});




function getData(dataId) {
    console.log(dataId)
    setTimeout(()=>{
        // console.log(dataId + 1)
    }, 2000)
}




function getData(dataId, getNextData) {
    setTimeout(() => {
    // console.log("data = ", dataId);
    if(getNextData) {
        getNextData();
    }
    }, 1000);
}

//This is callback hell(nested callbacks), difficult to understand
// getData(1, () => {
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         });
//     });
// });





//USing promise chain
function getData(dataId) {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    console.log("data = ", dataId);
    resolve("success");
    }, 1000);
    });
}

// console.log("Fetching data1")
// getData(1).then((res) => {
//     console.log(res);
//     console.log("Fectching data2: ");
//     getData(2).then((res) => {
//         console.log(res)
//         console.log("Fetching data3");
//         getData(3).then((res) => {
//             console.log("res");
//         });
//     });
// });


//another method to call
console.log("Fetching data1!");
getData(1).then((res) => {
    // console.log("res");

    console.log("Fetching data2!");
    return getData(2);
}).then((res)=>{
    // console.log(res);

    console.log("Fetching data3!");
    return getData(3);
}).then((res) => {
    console.log(res);
});
