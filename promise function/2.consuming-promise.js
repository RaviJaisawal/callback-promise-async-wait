//1
const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    
    if(randomNumber < .7) {
      resolve('All things went well!');
    } else {
      reject(new Error('Something went wrong'));
    }
  });


promise.then((data) => {
    console.log(data);  // prints 'All things went well!'
    },
    (error) => {
    console.log(error); // prints Error object
    }
  );

//2
const promise1 = new Promise((resolve, reject) => {
    reject(new Error('Something went wrong'));
  });


  promise1
    .then((data) => {
       console.log(data);
     })
    .catch((error) => {
       console.log(error); // prints Error object
    });