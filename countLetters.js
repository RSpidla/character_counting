

// Step 1 Define letterCount Function
function letterCount(letters) {

    // Step 2 initialize variable to hold string object that is passed
    var letterString = (letters);
  
    // Step 3 initialize variable to hold string object
    /* Remove whitespace from string using regular expression */
    var newLetterString = letterString.replace(/\s/g, "");
  
    // Step 4 initialize variable to hold string object that has the following methods applied:
      /* split() method - splits string object into an array of strings by seperating the string into sub strings
         sort() method sorts the elements od an array in place an returns the array.
         join() method creates and returns a new string by concatenating all of the elements into an array, seperated by commas or specified sepertor string. 
      */
    let letterStringFinal = newLetterString.split("").sort().join("");
  
    // Step 5 inititialize 'counter' variable and set value to 1
    let counter = 1;
  
    // Step 6 iniitialize 'result' variable which will hold object
    const result = {};
  
    // Step 7 Create incrementing for loop 
    /* Starting point of for loop will be newLetterString.length which corresponds to the first letter in the string
       As long as i is less than the newLetterString.length the loop will go on we increment i after each iteration   
    */
    for (let i = 0; i < newLetterString.length; i++) {
  
      // Step 8 initialize variable 
      var char = letterStringFinal[i];

      
      if (char == letterStringFinal[i + 1]) {
        counter++;
        result[char] = counter;
      }
      else {
        counter = 1;
        if (!result[char]) result[char] = counter;
      }
    }
    
    return result;

    // console.log(letterStringFinal);
  }
  
  
  
  
  console.log(letterCount("Lighthouse Labs"));
  
  
  
  
  
  
  