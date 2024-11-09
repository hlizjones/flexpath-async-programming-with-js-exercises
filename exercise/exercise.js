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
