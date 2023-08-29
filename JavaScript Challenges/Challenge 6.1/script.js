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
        console.log(postData.text);
    })
    .catch(error => {
        console.error(`Error fetching post ${post}:`, error);
    });
//Step 3: Rewrite with Async/Await
//Using async/await, rewrite the previous challenge (fetching a random fact) to achieve the same result
async function fetchData() {
    try {
      let response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      let data = await response.json();
      console.log(data.text);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
//Step 4: Fetch Multiple Dog Images
//You have an array of URLs. Fetch images from all these URLs simultaneously and log the results
async function fetchMultiple() {
    try {
        let [data1, data2, data3] = await Promise.all([
            fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()),
            fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()),
            fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
        ]);

        console.log(data1, data2, data3);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchMultiple();
  