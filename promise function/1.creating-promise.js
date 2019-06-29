const myPromise = new Promise(function(resolve, reject) {

});

console.log(myPromise)

const promise = new Promise((resolve, reject) => {
    if(allWentWell) {
      resolve('All things went well!');
    } else {
      reject('Something went wrong');
    }
});

const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
      if(randomNumber < .6) {
        resolve('All things went well!');
      } else {
      reject('Something went wrong');
    }
    }, 2000);
  });