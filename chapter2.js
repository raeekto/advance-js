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
    console.log("data = ", dataId);
    if(getNextData) {
        getNextData();
    }
    }, 1000);
}

//This is callback hell(nested callbacks), difficult to understand
getData(1, () => {
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4);
        });
    });
});