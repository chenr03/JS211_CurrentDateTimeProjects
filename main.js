// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
const displayDate = () => {
  let currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}


// Write a JavaScript program to convert a number to a string.
const numToString =() => {

  let num = 15;
  let text =num.toString()

  console.log(text, num);

  document.getElementById("num-to-string").innerHTML = (`The typeof ${text} is ${typeof text}`)

}

// Write a JavaScript program to convert a string to the number.
const stringToNum = () => {

  let num = 15

  document.getElementById("string-to-num").innerHTML = (`The typeof ${num} is ${typeof num}`)

}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String
const differentTypes = (data) => {
  console.log(data);
  let isNum = Number(data);
  let isString = data.toString();
  let isBoolean = typeof isNum === "number";
  let isUndefined;
  let isNull = null;
  let isNan = NaN;

  document.getElementById("differentTypes").innerHTML = (`The typeof ${isBoolean} is ${typeof isBoolean}. 
  The typeof ${isNum} is ${typeof isNum}. The typeof "${isString}" is ${typeof isString}. The typeof ${isUndefined} is ${typeof isUndefined}. 
  The typeof ${isNull} is ${typeof isNull}. The typeof ${isNan} is ${typeof isNan}. `)
}


// Write a JavaScript program that adds 2 numbers together.
const sumOfNumbers = (a, b) => {

  document.getElementById("sumOfNumbers").innerHTML = (`The sum of ${a} and ${b} is ${a+b}`)

}


// Write a JavaScript program that runs only when 2 things are true.
const twoThingsAreTrue = (a, b) => {
  if (typeof a === typeof b) {
    document.getElementById("twoThingsAreTrue").innerHTML = (`Two things (${a} and ${b}) are true: ${typeof a} === ${typeof b}`)
  } else {
    document.getElementById("twoThingsAreTrue").innerHTML = (`Two things are false`)
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const oneThingIsTrue = (a, b) => {
  if (typeof a === "string" || typeof b === "string") {
    document.getElementById("oneThingIsTrue").innerHTML = (`One thing is true: ${typeof b}`)
  } else {
    document.getElementById("oneThingIsTrue").innerHTML = (`One thing is not true`)
  }
}


// Write a JavaScript program that runs when both things are not true.
const twoThingsAreFalse = (a, b) => {

  if (typeof a === "number" && typeof b === "number") {
    document.getElementById("twoThingsAreFalse").innerHTML = (`Two Things are False: ${typeof a}`)
  } else {
    document.getElementById("twoThingsAreFalse").innerHTML = (`Two Things are False`)
  }
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
