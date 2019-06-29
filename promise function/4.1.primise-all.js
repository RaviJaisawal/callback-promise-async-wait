const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('Promise1 resolved');
    }, 2000);
   });
   const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('Promise2 resolved');
    }, 1500);
   });

Promise.all([promise1, promise2])
    .then((data) => console.log(data[0], data[1]))
    .catch((error) => console.log(error));

