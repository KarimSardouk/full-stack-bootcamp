//Challenge 6.1
//Step 1: Simple Delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(2000).then(() => {
    console.log('Promise resolved after 2 seconds');
  });