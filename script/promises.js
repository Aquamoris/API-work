let a = 7;

console.log(a);

let b = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(a = 99);
    }, 2000);
});

b.then(function () {
    console.log(a);
})

console.log(a);