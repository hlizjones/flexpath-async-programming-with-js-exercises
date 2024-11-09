/*
	Values to use for multiple exercises
*/

const outputDiv = document.getElementById("output");
const callbackOutput = document.getElementById("callback-output");

const section1OutputDiv = document.getElementById("section-1-output");
const section2OutputDiv = document.getElementById("section-2-output");
const section3OutputDiv = document.getElementById("section-3-output");

/*
Exercise 1: Understanding Synchronous vs. Asynchronous Code
Description: Write a function syncFunction that logs numbers 1 to 3 synchronously. 
Then, write an asyncFunction that logs numbers 1 to 3 asynchronously using setTimeout with a delay of 0. Observe the order of execution.
*/

// script.js

// Exercise 1
function syncFunction() {
  console.log("Synchronous Function Start");
  console.log(1);
  console.log(2);
  console.log(3);
  console.log("Synchronous Function End");
}

function asyncFunction() {
  console.log("Asynchronous Function Start");
  setTimeout(() => console.log(1), 0);
  setTimeout(() => console.log(2), 0);
  setTimeout(() => console.log(3), 0);
  console.log("Asynchronous Function End");
}

syncFunction();
asyncFunction();

// Expected Output:
// Synchronous Function Start
// 1
// 2
// 3
// Synchronous Function End
// Asynchronous Function Start
// Asynchronous Function End
// 1
// 2
// 3

/*
Exercise 2: Callback Function Example
Description: Create a function getDataCallback that accepts a callback function. Use setTimeout to simulate fetching data asynchronously 
and then execute the callback with the data. Update the #callback-output div with the data when the callback-button is clicked.
*/

// Exercise 2
const callbackButton = document.getElementById("callback-button");

function getDataCallback(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 1000);
}

callbackButton.addEventListener("click", () => {
  getDataCallback((data) => {
    callbackOutput.textContent = `Callback Data: ${JSON.stringify(data)}`;
  });
});

/*
Exercise 3: The Callback Pyramid of Doom
Description: Simulate multiple asynchronous operations using nested callbacks (at least 3 levels deep). Discuss how this leads to the "Callback Pyramid of Doom".
*/

// Exercise 3
function operation1(callback) {
  setTimeout(() => {
    console.log("Operation 1 Complete");
    callback();
  }, 1000);
}

function operation2(callback) {
  setTimeout(() => {
    console.log("Operation 2 Complete");
    callback();
  }, 1000);
}

function operation3(callback) {
  setTimeout(() => {
    console.log("Operation 3 Complete");
    callback();
  }, 1000);
}

function startOperations() {
  operation1(() => {
    operation2(() => {
      operation3(() => {
        console.log("All Operations Complete");
      });
    });
  });
}

// Call the function
startOperations();

// This nesting leads to code that's hard to read and maintain, illustrating the "Callback Pyramid of Doom".

/*
Exercise 4: Creating a Promise
Description: Rewrite the getDataCallback function from Exercise 2 to 
return a Promise instead of using a callback. Name it getDataPromise and update the promise-button to use it.
*/

// Exercise 4
const promiseButton = document.getElementById("promise-button");

function getDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 1000);
  });
}

promiseButton.addEventListener("click", () => {
  getDataPromise()
    .then((data) => {
      callbackOutput.textContent = `Promise Data: ${JSON.stringify(data)}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

/*
Exercise 5: Promise States
Description: Explain the three states of a Promise: pending, fulfilled, and rejected. Create a Promise that intentionally rejects to demonstrate the rejected state.
*/

// Exercise 5

// Promise States:
// - Pending: Initial state, neither fulfilled nor rejected.
// - Fulfilled: Operation completed successfully.
// - Rejected: Operation failed.

function getRejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise Rejected!");
    }, 1000);
  });
}

getRejectedPromise()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// This will log 'Error: Promise Rejected!' to the console after 1 second.

/*
Exercise 6: Consuming Promises with then, catch, and finally
Description: Modify the Promise in Exercise 4 to include a finally block that logs "Operation completed" regardless of success or failure.
*/

// Exercise 6

getDataPromise()
  .then((data) => {
    callbackOutput.textContent = `Promise Data: ${JSON.stringify(data)}`;
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operation completed");
  });

/*
Exercise 7: Chaining Promises
Description: Create a function processData that returns a Promise. 
Chain it after getDataPromise to process the fetched data. Update the output to display the processed data.
	*/

// Exercise 7

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.processed = true;
      resolve(data);
    }, 1000);
  });
}

promiseButton.addEventListener("click", () => {
  getDataPromise()
    .then((data) => processData(data))
    .then((processedData) => {
      callbackOutput.textContent = `Processed Data: ${JSON.stringify(
        processedData
      )}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

/*
Exercise 8: Handling Errors in Promise Chains
Description: Modify the chain in Exercise 7 to handle errors that may occur in processData. Simulate an error and ensure it is caught and logged.
*/

// Exercise 8

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error
      reject("Error processing data");
    }, 1000);
  });
}

promiseButton.addEventListener("click", () => {
  getDataPromise()
    .then((data) => processData(data))
    .then((processedData) => {
      callbackOutput.textContent = `Processed Data: ${JSON.stringify(
        processedData
      )}`;
    })
    .catch((error) => {
      console.error("Error:", error);
      callbackOutput.textContent = `Error: ${error}`;
    });
});

/*
Exercise 9: Using async and await
Description: Rewrite the Promise chain from Exercise 7 using async and await. Ensure proper error handling using try-catch.
*/

// Exercise 9

promiseButton.addEventListener("click", async () => {
  try {
    const data = await getDataPromise();
    const processedData = await processData(data);
    callbackOutput.textContent = `Processed Data: ${JSON.stringify(
      processedData
    )}`;
  } catch (error) {
    console.error("Error:", error);
    callbackOutput.textContent = `Error: ${error}`;
  } finally {
    console.log("Async/Await operation completed");
  }
});

/*

Exercise 10: Sequential API Requests with async/await
Description: When the sequential-requests-button is clicked, fetch two posts 
sequentially from https://jsonplaceholder.typicode.com/posts/1 and /posts/2 using async/await. Display both posts in the #output div.
*/

// Exercise 10
const sequentialButton = document.getElementById("sequential-requests-button");

sequentialButton.addEventListener("click", async () => {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post1 = await response1.json();

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    const post2 = await response2.json();

    outputDiv.textContent = JSON.stringify({ post1, post2 }, null, 2);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
});

/*
Exercise 11: Parallel API Requests with Promise.all
Description: When the parallel-requests-button is clicked, fetch two posts in parallel using Promise.all and display the results.
*/

// Exercise 11
const parallelButton = document.getElementById("parallel-requests-button");

parallelButton.addEventListener("click", async () => {
  try {
    const [post1, post2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
        res.json()
      ),
    ]);

    outputDiv.textContent = JSON.stringify({ post1, post2 }, null, 2);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
});

/*
Exercise 12: Using Promise.race
Description: Implement a function that uses Promise.race to fetch data from two URLs. 
Display the result of the first one that resolves when the race-requests-button is clicked.

*/

// Exercise 12
const raceButton = document.getElementById("race-requests-button");

raceButton.addEventListener("click", async () => {
  try {
    const fastestResponse = await Promise.race([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
        res.json()
      ),
    ]);

    outputDiv.textContent = `Fastest Response: ${JSON.stringify(
      fastestResponse,
      null,
      2
    )}`;
  } catch (error) {
    console.error("Error:", error);
  }
});

/*
Exercise 13: Using Promise.allSettled
Description: When the all-settled-button is clicked, make multiple fetch requests 
where some may fail. Use Promise.allSettled to handle all outcomes and display the statuses.
*/

// Exercise 13
const allSettledButton = document.getElementById("all-settled-button");

allSettledButton.addEventListener("click", async () => {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/invalid-url", // This will fail
    "https://jsonplaceholder.typicode.com/posts/3",
  ];

  const promises = urls.map((url) => fetch(url).then((res) => res.json()));

  const results = await Promise.allSettled(promises);

  outputDiv.textContent = JSON.stringify(results, null, 2);
});

/*
Exercise 14: Using Promise.any
Description: Implement functionality to fetch data from multiple sources using Promise.any 
and display the first successful response when the any-promise-button is clicked.

*/

// Exercise 14
const anyButton = document.getElementById("any-promise-button");

anyButton.addEventListener("click", async () => {
  try {
    const firstSuccess = await Promise.any([
      fetch("https://jsonplaceholder.typicode.com/invalid-url1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/invalid-url2").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts/4").then((res) =>
        res.json()
      ),
    ]);

    outputDiv.textContent = `First Successful Response: ${JSON.stringify(
      firstSuccess,
      null,
      2
    )}`;
  } catch (error) {
    outputDiv.textContent = "All promises were rejected.";
    console.error("Error:", error);
  }
});

/*
Exercise 15: Canceling Fetch Requests with AbortController
Description: When the abort-request-button is clicked, start fetching data with a delay. 
Provide another button to abort the fetch request using AbortController.
*/

// Exercise 15
const abortRequestButton = document.getElementById("abort-request-button");
let abortController;

abortRequestButton.addEventListener("click", () => {
  abortController = new AbortController();

  fetch("https://jsonplaceholder.typicode.com/posts/1?delay=5000", {
    signal: abortController.signal,
  })
    .then((response) => response.json())
    .then((data) => {
      httpOutput.textContent = `Fetched Data: ${JSON.stringify(data)}`;
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        httpOutput.textContent = "Fetch request was aborted.";
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    });
});

// Add a button to abort the request
const cancelButton = document.createElement("button");
cancelButton.textContent = "Cancel Fetch Request";
cancelButton.addEventListener("click", () => {
  if (abortController) {
    abortController.abort();
  }
});
httpOutput.appendChild(cancelButton);

/*
Exercise 17: Handling Rejected Promises Globally
Description: Set up a global handler for unhandled promise rejections using 
window.addEventListener('unhandledrejection', handler). Test it by creating a rejected promise without a catch block.
*/

// Exercise 17

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled Rejection:", event.reason);
});

// Create a rejected promise without a catch
const rejectedPromise = new Promise((resolve, reject) => {
  reject("Promise was rejected without a catch");
});

// Not adding a .catch() to handle the rejection

/*
Exercise 18: Combining Promises and Async/Await
Description: Use both promises and async/await to fetch data and process it. 
Fetch data using fetch (which returns a promise), then process it in an async function using await.

*/

// Exercise 18

async function fetchDataAndProcess() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5"
    );
    const data = await response.json();
    const processedData = await processData(data);
    outputDiv.textContent = `Processed Data: ${JSON.stringify(processedData)}`;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function
fetchDataAndProcess();

/*
Exercise 19: Using Promise.resolve and Promise.reject
Description: Create functions that return Promise.resolve and Promise.reject immediately. 
Use them to test promise handling without asynchronous operations.

*/

// Exercise 19

function immediateResolve() {
  return Promise.resolve("Immediate Resolve");
}

function immediateReject() {
  return Promise.reject("Immediate Reject");
}

immediateResolve()
  .then((data) => {
    console.log("Resolved:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

immediateReject()
  .then((data) => {
    console.log("Resolved:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
Exercise 20: Implementing a Simple Promise-based Timeout
Description: Create a function delay that returns a promise that resolves 
after a specified number of milliseconds. Use it to delay actions in your code.
*/

// Exercise 20

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedAction() {
  console.log("Action will happen after 2 seconds...");
  await delay(2000);
  console.log("Action executed");
}

delayedAction();

/*
Exercise 22: Sequential Execution with for Loop and await
Description: Fetch multiple posts sequentially in a loop using async/await. Display each post as it is fetched.
*/

// Exercise 22

async function fetchPostsSequentially() {
  for (let i = 1; i <= 3; i++) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${i}`
      );
      const post = await response.json();
      outputDiv.innerHTML += `<p>Post ${i}: ${post.title}</p>`;
    } catch (error) {
      console.error(`Error fetching post ${i}:`, error);
    }
  }
}

// Call the function
fetchPostsSequentially();

/*
Exercise 23: Converting Callback-based Functions to Promises
Description: Given a callback-based function readFileCallback, wrap it in a function readFilePromise that returns a Promise.
*/

// Exercise 23

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

// Converting to a Promise-based function
function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    readFileCallback(filename, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// Using the Promise-based function
readFilePromise("valid.txt")
  .then((data) => {
    console.log("File Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
	Exercise 24: Using Promise.prototype.finally
	Description: Demonstrate the use of finally in a promise chain by cleaning up resources after a promise is settled.
	*/

// Exercise 24

function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation successful");
    }, 1000);
  });
}

simulateAsyncOperation()
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Cleanup actions can be performed here.");
  });

/*
Exercise 25: Handling Multiple Async Operations with Different Timing
Description: Create multiple promises that resolve after different delays. 
Use Promise.all to wait for all to complete and display the results.
*/

// Exercise 25

function createDelayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

async function handleMultiplePromises() {
  const promises = [
    createDelayedPromise("First", 3000),
    createDelayedPromise("Second", 2000),
    createDelayedPromise("Third", 1000),
  ];

  const results = await Promise.all(promises);
  outputDiv.textContent = `Results: ${results.join(", ")}`;
}

// Call the function
handleMultiplePromises();

/*
This set of exercises covers various aspects of asynchronous programming, promises, async/await, advanced promise methods, and HTTP requests. 
Each exercise includes a description and corresponding JavaScript code to facilitate learning and understanding.

Feel free to add the JavaScript code to the script.js file linked in your HTML document and test the exercises on your webpage.

Note: For exercises involving external API requests, ensure that you have a stable internet connection and that the 
APIs support cross-origin requests. Some endpoints used in the exercises are from jsonplaceholder.typicode.com, a free online REST API for testing and prototyping.

Remember to check the browser console for any errors or logs that may help in debugging or understanding the flow of asynchronous code.

*/
