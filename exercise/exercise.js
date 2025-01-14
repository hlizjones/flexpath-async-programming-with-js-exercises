/*
  Values to use for multiple exercises
*/

const section1OutputDiv = document.getElementById("section-1-output");
const section2OutputDiv = document.getElementById("section-2-output");

/*

  Exercise 1: Understanding Synchronous vs. Asynchronous Code

  Description: 

  Write a function `syncFunction` that logs the numbers 1 to 3 synchronously. 

  Then, write an `asyncFunction` that logs the numbers 1 to 3 asynchronously 
  using setTimeout with a delay of 0. 

  Observe the order of execution.
*/

let placeholder = `Delete
                   Me
                   And
                   Code
                   Here
`;

// function syncFunction () {
//   console.log(1);
//   console.log(2);
//   console.log(3)
// }

// function asyncFunction () {
//   setTimeout(() => { console.log(1) }, 0);
//   setTimeout(() => { console.log(2) }, 0);
//   setTimeout(() => { console.log(3) }, 0);
// }

// syncFunction();
// asyncFunction();

/*
  Exercise 2: Callback Function Example

  Description: 

  Create a function `getDataCallback` that accepts a callback function. 

  Use setTimeout to simulate fetching data asynchronously and then execute the 
  callback with the data. 

  Display the returned data in the #section-2-output div when the 
  #exercise-2-btn is clicked.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// function getDataCallback(callback) {
//   setTimeout(() =>{
//     data = {name: "Hannah"}
//     callback(data) 
//   }, 3000)}

// document.querySelector("#exercise-2-btn").addEventListener(
//   "click",
//   () => getDataCallback((data) => section2OutputDiv.innerHTML=JSON.stringify(data) )
// )



/*
  Exercise 3: The Callback Pyramid of Doom

  Description: 

  Simulate multiple asynchronous operations using nested callbacks 
  (at least 3 levels deep). 

  Discuss how this leads to the "Callback Pyramid of Doom".
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// function spellFirst (callback) {
//   console.log("Hannah")
//   callback()
// }

// function spellMiddle (callback) {
//   console.log("Elizabeth")
//   callback()
// }

// function spellLast () {
//   console.log("Jones")
// }

// spellFirst(() => spellMiddle(() => spellLast()))

/*
  Exercise 4: Creating a Promise

  Description: 

  In the space below, rewrite the `getDataCallback` function from Exercise 2 to 
  return a Promise instead of using a callback. 

  Name it `getDataPromise`.  

  Display the returned data in the #section-2-output div when the 
  #exercise-4-btn is clicked.
*/

// Exercise 4 - Solution

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// let getDataPromise = new Promise((resolve) => {
//   setTimeout(() =>{
//     let name = {name: "Hannah"};
//     resolve(name) 
//   }, 3000)
// });


// document.querySelector("#exercise-4-btn").addEventListener(
//   "click",
//   () => {
//    getDataPromise
//   .then ((data) => section2OutputDiv.innerHTML=JSON.stringify(data))
//   }
// )


/*
  Exercise 5: Promise States

  Description: 

  Explain the three states of a Promise: 
    - pending
    - fulfilled
    - rejected
    
  Create a Promise that intentionally rejects to 
  demonstrate the rejected state.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// let rejectedPromise = new Promise((resolve, reject) => {
//   if (1 === 2) {
//     resolve("1 is equal to 2")
//   } else {
//     reject("1 is not equal to 2")
//   }
// })

// rejectedPromise
// .then((resolve) => console.log(resolve))
// .catch((reject) => console.log(reject))

/*
  Exercise 6: Consuming Promises with then, catch, and finally

  Description: 

  Modify the `getDataPromise` method from exercise 4 to include a 
  `finally` block that logs "Operation completed" regardless of 
  success or failure.

  - getDataPromise().then().catch().finally()
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// let getDataPromise = new Promise((resolve) => {
//   setTimeout(() =>{
//     let name = {name: "Hannah"};
//     resolve(name) 
//   }, 3000)
// });


// document.querySelector("#exercise-4-btn").addEventListener(
//   "click",
//   () => {
//    getDataPromise
//   .then ((data) => section2OutputDiv.innerHTML=JSON.stringify(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Operation completed!"))
//   }
// )

/*
  Exercise 7: Chaining Promises

  Description: 

  Create a function `processData` that returns a Promise. 

  Chain it after getDataPromise to process the fetched data. 

  Display the returned data in the #section-2-output div when the 
  #exercise-7-btn is clicked.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;
// let getDataPromise = new Promise((resolve) => {
//   setTimeout(() =>{
//     let name = {name: "Hannah"};
//     resolve(name) 
//   }, 3000)
// });

// function processData (data) {
//   return new Promise((resolve) => {
//     console.log("Processing data...")
//     resolve(data)
//   })
// }


// document.querySelector("#exercise-7-btn").addEventListener(
//   "click",
//   () => {
//    getDataPromise
//   .then((data) => processData(data))
//   .then ((processedData) => section2OutputDiv.innerHTML=JSON.stringify(processedData))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Operation completed!"))
//   }
// )



/*
  Exercise 8: Handling Errors in Promise Chains

  Description: 

  Modify the chain from Exercise 7 to handle errors that may occur in `processData`. 

  Simulate an error and ensure it is caught and logged.

  Display the returned data in the #section-2-output div when the 
  #exercise-8-btn is clicked.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;
// let getDataPromise = new Promise((resolve) => {
//   setTimeout(() =>{
//     let name = {name: "Hannah"};
//     resolve(name) 
//   }, 3000)
// });

// function processData (data) {
//   return new Promise((resolve, reject) => {
//     console.log("Processing data...")
//     if(data === 1) {
//     resolve(data) 
//     } else {
//     reject("Error in processing data")
//     }
//   })
// }


// document.querySelector("#exercise-8-btn").addEventListener(
//   "click",
//   () => {
//    getDataPromise
//   .then((data) => processData(data))
//   .then ((processedData) => section2OutputDiv.innerHTML=JSON.stringify(processedData))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Operation completed!"))
//   }
// )

/*
  Exercise 9: Using async and await

  Description: 

  Rewrite the Promise chain from Exercise 7 using async and await. 

  Ensure proper error handling using try-catch.

  Display the returned data in the #section-2-output div when the 
  #exercise-9-btn is clicked.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// function getDataPromise () {
//   return new Promise((resolve) => {
//      setTimeout(() => {
//     let name = { name: "Hannah" };
//     resolve(name);
//   }, 3000)
// })
// };

// function processData(data) {
//   console.log("Processing data...");
//   return data;
// };


// document.querySelector("#exercise-9-btn").addEventListener(
//   "click",
//   async () => {
//     try {
//       let data = await getDataPromise()
//       let processedData = await processData(data);
//       section2OutputDiv.innerHTML = JSON.stringify(processedData);
//     } catch (error) {
//       console.log(error);
//     }
//   });


/*
  Exercise 10: Sequential API Requests with async/await
 
  Description: 
 
  When the #exercise-10-btn is clicked, fetch two posts 
  sequentially from https://jsonplaceholder.typicode.com/posts/5 and 
  https://jsonplaceholder.typicode.com/posts/6 using async/await. 
 
  Display both posts in the #section-1-output div.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// document.querySelector("#exercise-10-btn").addEventListener(
//   "click",
//   async () => {
//     try{
//     let post5 = await fetch("https://jsonplaceholder.typicode.com/posts/5")
//     let post6 = await fetch("https://jsonplaceholder.typicode.com/posts/6")
//     let data5=await post5.json()
//     let data6=await post6.json()
//     section1OutputDiv.innerHTML=`${JSON.stringify(data5)}, ${JSON.stringify(data6)}`
//     } catch {
//       console.log("Error fetching data")
//     }
//   }

// )

/*
  Exercise 11: Parallel API Requests with Promise.all
 
  Description: 
 
  When the #exercise-11-btn is clicked, fetch two posts in parallel 
  from https://jsonplaceholder.typicode.com/posts/10 and 
  https://jsonplaceholder.typicode.com/posts/15 using Promise.all and 
  display the results.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// document.querySelector("#exercise-11-btn").addEventListener(
//   "click",
//   async () => {
//     try{
//     let data = await Promise.all([
//     (async () => { 
//       let post5 = await fetch("https://jsonplaceholder.typicode.com/posts/5")
//       return post5.json()
//     })(),
//     (async () => {
//       let post6 = await fetch("https://jsonplaceholder.typicode.com/posts/6")
//       return post6.json()
//     })()
//   ])
//   section1OutputDiv.innerHTML=`${JSON.stringify(data)}`
//     } catch {
//       console.log("Error fetching data")
//     }
//   }
// )

/*
  Exercise 12: Using Promise.race
 
  Description: 
 
  Implement a function that uses Promise.race to fetch data from these two URLs:
  - https://jsonplaceholder.typicode.com/posts/16
  - https://jsonplaceholder.typicode.com/posts/20
 
  Display the result of the first one that resolves to #section-1-output 
  when the #exercise-12-btn is clicked.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// document.querySelector("#exercise-12-btn").addEventListener(
//   "click",
//   async () => {
//     try{
//     let data = await Promise.race([
//     (async () => { 
//       let post5 = await fetch("https://jsonplaceholder.typicode.com/posts/16")
//       return post5.json()
//     })(),
//     (async () => {
//       let post6 = await fetch("https://jsonplaceholder.typicode.com/posts/20")
//       return post6.json()
//     })()
//   ])
//   section1OutputDiv.innerHTML=`${JSON.stringify(data)}`
//     } catch {
//       console.log("Error fetching data")
//     }
//   }
// )


/*
  Exercise 13: Using Promise.allSettled
 
  Description: 
 
  When the #exercise-13-btn is clicked, make multiple fetch requests 
  where some may fail:
    - "https://jsonplaceholder.typicode.com/posts/23"
    - "https://jsonplaceholder.typicode.com/invalid-url"
    - "https://jsonplaceholder.typicode.com/posts/25"
 
  Use Promise.allSettled to handle all outcomes and display the statuses
  in #section-1-output.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;
// let posts = [];

// document.querySelector("#exercise-13-btn").addEventListener(
//   "click",
//   async () => {
//     try {
//       let data = await Promise.allSettled([
//         (async () => {
//           return await fetch("https://jsonplaceholder.typicode.com/posts/23")
//         })(),
//         (async () => {
//           return await fetch("https://jsonplaceholder.typicode.com/invalid-url")
//         })(),
//         (async () => {
//           return await fetch("https://jsonplaceholder.typicode.com/posts/25")
//         })()
//       ])
//       data.forEach(async (el) => {
//         if (el.status === "fulfilled") {
//           if (el.value.status !== 200) {
//             console.log(`Unable to fetch data for ${el.value.url}`)
//           } else {
//           let post = await el.value.json()
//           let postProcessed = JSON.stringify(post)
//           posts.push(postProcessed)
//           section1OutputDiv.innerHTML = posts}
//         } else {
//           console.log("Promise not fulfilled")
//         }
//       }
//       )
//     } catch {
//       console.log("Error fetching data")
//     }
//   })

// document.querySelector("#exercise-13-btn").addEventListener(
//   "click",
//   async () => {
//     try {
//       let urls = [
//         "https://jsonplaceholder.typicode.com/posts/23",
//         "https://jsonplaceholder.typicode.com/invalid-url",
//         "https://jsonplaceholder.typicode.com/posts/25"
//       ]


//       let promises = urls.map((url) => fetch(url) 
//       .then((response) => {
//         if (response.status !== 200) {
//           return { status: response.status, url: url };
//         }
//         return response.json();
//       }))
//       let posts = await Promise.allSettled(promises)
//       posts.forEach((el) => { 
//         let text = document.createTextNode(JSON.stringify(el.value))
//         section1OutputDiv.appendChild(text)})
//     } catch {
//       console.log("Error fetching data")
//     }
//   })

/*
  Exercise 14: Using Promise.any
 
  Description: 
 
  Implement functionality to fetch data from multiple sources using Promise.any 
  and display the first successful response to #section-1-output when the 
  #exercise-14-btn is clicked.
 
    - "https://jsonplaceholder.typicode.com/invalid-url1"
    - ""https://jsonplaceholder.typicode.com/invalid-url2"
    - "https://jsonplaceholder.typicode.com/posts/2"
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// document.querySelector("#exercise-14-btn").addEventListener(
//   "click",
//   async () => {
//     try {
//       let urls = [
//         "https://jsonplaceholder.typicode.com/invalid-url1",
//         "https://jsonplaceholder.typicode.com/invalid-url2",
//         "https://jsonplaceholder.typicode.com/posts/2"
//       ]

//       let promises = urls.map((url) => fetch(url)
//         .then((response) => {
//           if (response.status !== 200) {
//             return Promise.reject(`Error with: ${url}`);
//           }
//           return response.json();
//         }))

//       let post = await Promise.any(promises)
//       section1OutputDiv.innerHTML = JSON.stringify(post)
//     } catch {
//       console.log("Error fetching data")
//     }
//   })



/*
  Exercise 15: Handling Rejected Promises Globally
 
  Description: 
 
  Set up a global handler for unhandled promise rejections using 
  window.addEventListener('unhandledrejection', handler). 
 
  Test it by creating a rejected promise without a catch block.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// window.addEventListener(
//   "unhandledrejection",
//   (e) => {
//     console.log(`Unhandled rejection event: ${e.reason}`)
//   }
// )

// let rejectedPromise = new Promise((resolve, reject) => {
//   reject("Promise was rejected without a catch block")
// })


/*
  Exercise 16: Combining Promises and Async/Await
 
  Description: 
 
  Use both promises and async/await to fetch data and process it. 
    - https://jsonplaceholder.typicode.com/posts/10
 
  Fetch data using fetch (which returns a promise), then process it in 
  an async function using await.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// (async () => {
//   try{
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts/10")
//   let data = await response.json()
//   console.log(JSON.stringify(data))
//   } catch {
//     console.log(error.message)
//   }
// })()

/*
  Exercise 17: Using Promise.resolve and Promise.reject
 
  Description: 
 
  Create functions that return Promise.resolve and Promise.reject immediately.
 
  Use them to test promise handling without asynchronous operations.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// let promiseReject = () => Promise.reject("Promise rejected");
// let promiseResolve = () => Promise.resolve("Promise resolved");

// async function testPromises (callback) {
// try {
//   let data = await callback()
//   console.log(data)
// } catch {
//   console.error(error.message)
// }
// }

// testPromises(promiseReject);
// testPromises(promiseResolve);


/*
  Exercise 18: Implementing a Simple Promise-based Timeout
 
  Description: 
 
  Create a function `delay` that returns a promise that resolves 
  after a specified number of milliseconds. 
 
  Use it to delay actions in your code.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// function delay (ms) {
//   return new Promise((resolve) => setTimeout(() => resolve(), ms))}

// let getData = async () => {
//     try{
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/10");
//     let data = await response.json();
//     await delay(3000);
//     console.log(JSON.stringify(data));
//     } catch {
//       reject (error.message);
//     }}

//   getData();

/*
  Exercise 19: Sequential Execution with for Loop and await
 
  Description: 
 
  Fetch multiple posts sequentially in a loop using async/await. 
  - HINT - `https://jsonplaceholder.typicode.com/posts/${loop_index_number}`
 
  Display each post inside #section-1-output as it is fetched.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// function fetchPostsSequentially (num, amount) {
//   for (i = num; i <= amount; i++) {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
//     .then(response => response.json())
//     .then(data => {
//       let textNode = document.createTextNode(JSON.stringify(data))
//       document.querySelector("#section-1-output").appendChild(textNode)
//     })
//   }
// }

// fetchPostsSequentially(1, 5)



/*
  Exercise 20: Converting Callback-based Functions to Promises
 
  Description: 
 
  Given a callback-based function `readFileCallback`, wrap it in a 
  function `readFilePromise` that returns a Promise.
*/

// Simulating a callback-based function
function readFileCallback(filename, callback) {
  setTimeout(() => {
    if (filename === "valid.txt") {
      callback(null, "File content");
    } else {
      callback("File not found", null);
    }
  }, 1000);
}

placeholder = `Delete
               Me
               And
               Code
               Here
`;

// My attempt: I interpretted it as rewrite function to be a promise
// function readFilePromise (filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (filename === "valid.txt") {
//         resolve("File content");
//       } else {
//         reject("File not found");
//       }
//     }, 1000);
//   }
//   )}

// After looking at the solution and trying to rewrite from memory: 
// function readFilePromise (filename, callback) {
//   return new Promise((resolve, reject) => {
//     callback(filename, (error, content) => { 
//       if (content) {
//       resolve (content);
//       } else {
//       reject (error);
//       }
//     }) 
//   })
// }



/*
  Exercise 21: Handling Multiple Async Operations with Different Timing
 
  Description: 
 
  Create multiple promises that resolve after different delays. 
 
  Use Promise.all to wait for all to complete and display the results.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

let promise1 = new Promise((resolve) => {
  setTimeout(resolve("It"), 3000)
});
let promise2 = new Promise((resolve) => {
  setTimeout(resolve("is"), 3000)
});
let promise3 = new Promise((resolve) => {
  setTimeout(resolve("done."), 3000)
});
Promise.all([promise1, promise2, promise3])
.then(promises => console.log(promises))
