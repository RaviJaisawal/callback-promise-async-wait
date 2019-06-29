const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('Promise1 resolved');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
setTimeout(() => {
    reject('Promise2 rejected');
}, 1500);
});

Promise.race([promise1, promise2])
    .then((data) => console.log(data))  // Promise1 resolved
    .catch((error) => console.log(error));