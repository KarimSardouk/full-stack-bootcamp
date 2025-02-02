//Step 1
//Delayed execution
setTimeout(myFunction, 5000);

function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello after 5 seconds!";
}
//Repeated Execution
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    console.log(timeString);
}

// Call the function immediately to display the initial time
updateClock();

// Set up an interval to update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);


// Delayed Promise
const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

// Chaining Promises
delayedPromise
    .then((message) => {
        alert(message); // Display the message from the first promise
        return "Chained message!";
    })
    .then((chainedMessage) => {
        console.log(chainedMessage); // Log the chained message
    })
    .catch((error) => {
        console.error(error); // Handle any errors
    });
//Step 2: Diving Deeper into Async Operations
(async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let user = await response.json();
        console.log(user); // Handle the fetched data
    } catch (error) {
        console.error(error); // Handle any errors
    }
})();
//Step 3: Advanced Async Patterns
const postIds = [1, 2, 3];
const promises = postIds.map((postId) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok for post ${postId}`);
            }
            return response.json();
        })
);

Promise.all(promises)
    .then((results) => {
        // Handle the combined data here
        console.log(results);
    })
    .catch((error) => {
        console.error(error); // Handle any errors
    });
async function fetchPostsSequentially() {
    const postIds = [4, 5, 6, 7, 8];
    for (const postId of postIds) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            if (!response.ok) {
                throw new Error(`Network response was not ok for post ${postId}`);
            }
            const data = await response.json();
            console.log(data); // Handle the fetched data
        } catch (error) {
            console.error(error); // Handle any errors
        }
    }
}

fetchPostsSequentially();


