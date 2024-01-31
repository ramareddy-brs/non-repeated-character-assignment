function findFirstNonRepeating() {
    // Get the input string from the user
    const inputString = document.getElementById("inputString").value;

    // Find the first non-repeating character
    const result = getFirstNonRepeatingChar(inputString);

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = result === null ? "No non-repeating character found." : `First non-repeating character: ${result}`;
}

function getFirstNonRepeatingChar(str){
  let obj = {};
  for(let item of str){
    if(obj[item]){
      obj[item]++;
    }else {
      obj[item] = 1;
    }
  }
  for(let item in obj){
    if(obj[item] === 1){
      return item; 
    }
  }
  return null;
}
