// Exercise 1: Create a function that uses setTimeout to log a message after 2 seconds
function logMessage() {
    setTimeout(() => {
        console.log('This message is logged after 2 seconds');
    }, 2000);
}
logMessage();

// Exercise 2: Use setInterval to log a message every second until stopped
let intervalId = setInterval(() => {
    console.log('This message is logged every second');
}, 1000);
setTimeout(() => clearInterval(intervalId), 5000); // Stops after 5 seconds

// Exercise 3: Make a GET request using XMLHttpRequest and log the response
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.error('Request failed with status', xhr.status);
    }
};
xhr.send();

// Exercise 4: Handle an error in an XMLHttpRequest using onerror
const xhrError = new XMLHttpRequest();
xhrError.open('GET', 'https://invalid-url.com', true);
xhrError.onerror = function() {
    console.error('An error occurred during the request');
};
xhrError.send();

// Exercise 5: Use a callback to handle the completion of two asynchronous XHR requests
function fetchData(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => callback(xhr.responseText);
    xhr.send();
}
fetchData('https://jsonplaceholder.typicode.com/posts', (data) => {
    console.log('First request complete:', JSON.parse(data));
    fetchData('https://jsonplaceholder.typicode.com/users', (data) => {
        console.log('Second request complete:', JSON.parse(data));
    });
});

// Exercise 6: Create a Promise that resolves after 3 seconds and log the result
const promise = new Promise((resolve) => {
    setTimeout(() => resolve('Promise resolved after 3 seconds'), 3000);
});
promise.then((message) => console.log(message));

// Exercise 7: Chain two Promises so the second one waits for the first to complete
new Promise((resolve) => {
    setTimeout(() => resolve('First promise resolved'), 2000);
})
.then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => resolve('Second promise resolved'), 2000);
    });
})
.then((message) => console.log(message));

// Exercise 8: Use .catch() to handle an error in a Promise
new Promise((_, reject) => {
    setTimeout(() => reject('Promise rejected'), 1000);
})
.catch((error) => console.error('Caught an error:', error));

// Exercise 9: Implement Promise.all() to wait for multiple Promises to resolve
const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = Promise.resolve('Promise 2 resolved');
Promise.all([promise1, promise2]).then((messages) => {
    console.log(messages);
}).catch((error) => console.error('An error occurred:', error));

// Exercise 10: Use Promise.race() to get the result of the fastest Promise
const fastPromise = new Promise((resolve) => setTimeout(() => resolve('Fast promise'), 1000));
const slowPromise = new Promise((resolve) => setTimeout(() => resolve('Slow promise'), 3000));
Promise.race([fastPromise, slowPromise]).then((message) => console.log(message));

// Exercise 11: Create an async function and use await to fetch data from an API
async function fetchDataAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
}
fetchDataAsync();

// Exercise 12: Handle errors in an async function using try-catch
async function fetchWithErrorHandling() {
    try {
        const response = await fetch('https://invalid-url.com');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchWithErrorHandling();

// Exercise 13: Use await with Promise.all() for parallel API requests
async function fetchParallel() {
    const [posts, users] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    ]);
    console.log('Posts:', posts);
    console.log('Users:', users);
}
fetchParallel();

// Exercise 14: Create a function that retries a failed async call up to 3 times
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) return await response.json();
        } catch (error) {
            if (i === retries - 1) throw error;
        }
    }
}
fetchWithRetry('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Exercise 15: Use async/await to make a sequential series of API requests
async function fetchSequential() {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json());
    console.log('Post:', post);
    const user = await fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
    console.log('User:', user);
}
fetchSequential();

// Exercise 16: Use finally to execute code after an async function completes
async function fetchWithFinally() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('Fetch operation complete');
    }
}
fetchWithFinally();

// Exercise 17: Implement a timeout mechanism using Promises
function fetchWithTimeout(url, timeout = 5000) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request timed out')), timeout)
        )
    ]);
}
fetchWithTimeout('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Exercise 18: Create a simple loading spinner that shows while data is being fetched
async function fetchWithSpinner() {
    const spinner = document.createElement('div');
    spinner.textContent = 'Loading...';
    document.body.appendChild(spinner);

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } finally {
        document.body.removeChild(spinner);
    }
}
fetchWithSpinner();

// Exercise 19: Use AbortController to cancel a Fetch request
const controller = new AbortController();
const signal = controller.signal;

fetch('https://jsonplaceholder.typicode.com/posts', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Error:', error);
        }
    });

setTimeout(() => controller.abort(), 3000); // Abort the request after 3 seconds

// Exercise 20: Log the status of a Promise in all three states
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise resolved'), 1000);
});
myPromise
    .then(result => console.log('Resolved:', result))
    .catch(error => console.error('Rejected:', error))
    .finally(() => console.log('Promise settled'));

// Exercise 21: Create a custom Promise that resolves or rejects based on a condition
function customPromise(condition) {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve('Condition met, promise resolved');
        } else {
            reject('Condition not met, promise rejected');
        }
    });
}
customPromise(true)
    .then(message => console.log(message))
    .catch(error => console.error(error));

// Exercise 22: Use Promise.allSettled() to handle a mix of resolved and rejected Promises
const promises = [
    Promise.resolve('Resolved promise'),
    Promise.reject('Rejected promise'),
    Promise.resolve('Another resolved promise')
];
Promise.allSettled(promises).then(results => console.log(results));

// Exercise 23: Implement a race condition fix using Promises
const slowTask = new Promise(resolve => setTimeout(() => resolve('Slow task'), 3000));
const fastTask = new Promise(resolve => setTimeout(() => resolve('Fast task'), 1000));
Promise.race([slowTask, fastTask]).then(result => console.log(result));

// Exercise 24: Log a message using finally after a Promise is settled
new Promise((resolve) => {
    setTimeout(() => resolve('Promise settled'), 1000);
})
.finally(() => console.log('Finally block executed'))
.then(message => console.log(message));

// Exercise 25: Use Promise.any() to get the first successful result from multiple Promises
const anyPromises = [
    Promise.reject('First promise failed'),
    Promise.resolve('Second promise succeeded'),
    Promise.resolve('Third promise also succeeded')
];
Promise.any(anyPromises)
    .then(result => console.log(result))
    .catch(error => console.error('All promises failed:', error));

// Exercise 26: Use async/await with Fetch to make a POST request
async function postData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'My Post', body: 'Post content', userId: 1 })
    });
    const data = await response.json();
    console.log(data);
}
postData();

// Exercise 27: Create a retry mechanism for failed HTTP requests using async/await
async function fetchWithRetries(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) return await response.json();
        } catch (error) {
            if (i === retries - 1) throw error;
        }
    }
}
fetchWithRetries('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Exercise 28: Make parallel API requests and display results as they arrive
async function fetchParallelRequests() {
    const urls = [
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/users'
    ];
    for (const url of urls) {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
}
fetchParallelRequests();

// Exercise 29: Use Promise.race() to handle a slow API call
const slowAPI = new Promise((resolve) => setTimeout(() => resolve('Slow API call completed'), 5000));
const timeout = new Promise((_, reject) => setTimeout(() => reject('Request timed out'), 3000));
Promise.race([slowAPI, timeout])
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Exercise 30: Write a function that waits for the first response, regardless of success or failure
async function waitForFirstResponse(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()).catch(err => err));
    const result = await Promise.race(promises);
    console.log(result);
}
waitForFirstResponse([
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://invalid-url.com'
]);
