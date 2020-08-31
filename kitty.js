// Given an input string like this which contains words:
// "sky kitten so THORN wood Sky soap throne"
// Write a function which will print each unique word on its own line, followed by a number
// representing the count for each word:
// Kitten (1)
// Sky (2)
// So (1)
// Soap (1)
// Thorn (1)
// Throne (1)
// Wood (1)
// Ensure the output shows the words in alphabetical order and each word is formatted in title
// case (initial letter capitalized).

// const { Console } = require("console");

// // This can be implemented in any language but Javascript is preferred.
// let nameString = ["sky", "kitten", "so", "THORN", "wood", "Sky", "soap", "throne"]

// let phrase = "sky kitten so THORN wood Sky soap throne"
// // let newWords = words.charAt(0).toUpperCase()
// // console.log(words)
// // let newWord ="sky"
// // let update = newWord.charAt(0).toUpperCase() + newWord.slice(1)

// let properString = phrase.toLowerCase();

// let words = properString.split(" ")


// let total ="";
// for( word of words){
//   let update = word.charAt(0).toUpperCase()+ word.slice(1) + " "
//   total += update 
// }
//  let finalResult = total;
 
//  let resultArray = finalResult.split(" ")
//  const column = resultArray.join('\r\n')
 

  // function getWordCount() {
  // let map={};

  // for (let i =0; i < resultArray.length; i++){
  //   let item = resultArray[i];
  //   map[item] = (map[item] + 1) || 1;}
  //   return map
  // }

  // console.log(getWordCount(column))

 let phrase2 = "sky kitten so THORN wood Sky soap throne"

  

    let map={};
    let properString = phrase2.toLowerCase();
    let words = properString.split(" ")
    let total ="";

    for( word of words){
      let update = word.charAt(0).toUpperCase() + word.slice(1) + " "
       total += update 
      }

    let finalResult =total;
    let resultArray = finalResult.split(" ")


    for (let i =0; i < resultArray.length; i++){
      let item = resultArray[i];
      map[item] = (map[item] + 1) || 1;}
      // return map
    // console.log(map)

    for( let item in map){
      console.log(`${item}: ${map[item]}`)
    }
   
  

//   console.log(getWordCountUpdate(phrase))

//   document.querySelector("h1").textContent = "TYES"
//   document.querySelector("div").textContent = getWordCountUpdate(phrase2)

// REDUCE METHOD!
// //function getWordCntRd() {
//   return array.reduce((prev, nxt) => {
//     prev[nxt] = (prev[nxt] + 1) || 1;
//     return prev;
//   }, {});
// }
//   // console.log(str.split(',').join("\r\n"))

//   console.log(resultArray.join('\r\n'));

// // Declare initial variable
// let sentence = "sky kitten so THORN wood Sky soap throne";

// // split the sentence into an array of individual words
// sentence = sentence.toLowerCase().split(" ");

// // capitalize first letter of each word then sort
// for(i=0; i<sentence.length; i++) {
//   sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1)
// }

// sentence = sentence.sort()

// // Establish counting object (We need to have two properties, the word and how many of it exists)
// function wordCount(word, count) {
//   this.word  = word;
//   this.count = count;
// }

// // declare array to contain the counted words
// let countedWords = []

// // cycle through the words array, check if the word exists, if not, add a new object entry.
// for (i=0; i<sentence.length; i++) {
//   let wordExist = countedWords.find(item => item.word == sentence[i]);
//   if(!wordExist){
//     countedWords.push(new wordCount(sentence[i], 1))
//   }
//   // if word already exists, access the indexed object and increase the count by 1.
//   else {
//     countedWords[countedWords.indexOf(wordExist)].count++
//   }
// }

// //print result
// countedWords.forEach(item => console.log(`${item.word}: ${item.count}`))