const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.2) {
      resolve(randomNumber);
    } else {
      reject(new Error("Random number is less than 0.2"));
    }
  }, 1000); //delay for example purposes
});

// example
myPromise
  .then((result) => {
    console.log("result 1 : ", result);
    return result + 1;
  })
  .then((result) => {
    console.log("result 2 : ", result);
    return result + 1;
  })
  .then((result) => {
    console.log("result 3 : ", result);
    return result + 1;
  })
  .catch((error) => {
    console.error("Promise rejected with error : ", error);
  });

console.log("Promise created...");
