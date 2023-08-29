//Challenge 6.1
//Step 1: Simple Delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(2000).then(() => {
    console.log('Promise resolved after 2 seconds');
  });
//Step 2: Fetch a random fact 
fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(postData => {
        console.log(postData);
    })
    .catch(error => {
        console.error(`Error fetching post ${post}:`, error);
    });
    