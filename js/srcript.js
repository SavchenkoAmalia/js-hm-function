//! 1

// const items = ['Mango', 'Poly', 'Ajax'];
// function logItems(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(`Елемент ${[i + 1]} - ${array[i]}`)
//     }
// }
// logItems(items);

//! 2

// function calculateEngravingPrice(message, pricePerWord) {
//     let words = message.split(' ' );
//     let numberOfWords = words.length;
//     let totalPrice = numberOfWords * pricePerWord;
//         return totalPrice;

// }

// let message = prompt('введіть текст:' );
// let pricePerWord = 10;
// let price = calculateEngravingPrice(message, pricePerWord);
// alert(`Вартість гравіювання: ${price} грн`);

//! 3

// function findLongestWord(string){
//     let arrStr = string.split(' ');
//     let wordLength = 0;
//     let longestWord;
  
//     for (let i = 0; i < arrStr.length; i++) {
//       wordLength = arrStr[1].length;
//       if (arrStr[i].length > wordLength) {
//         longestWord = arrStr[i];
//         return longestWord;
//       }
  
//     }
//   };
  
//   console.log(
//     findLongestWord("Hello world!My name is Amalia Savchenko")
//   );

//! 4

function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + '...';
    }
}

let inputString = prompt('введіть текст:');
let formattedString = formatString(inputString);
alert(formattedString); 

