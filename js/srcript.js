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
//     findLongestWord("Hello world!My name is Amalia Savchenko.")
//   );

//! 4

// function formatString(string) {
//     if (string.length <= 40) {
//         return string;
//     } else {
//         return string.slice(0, 40) + '...';
//     }
// }

// let inputString = prompt('введіть текст:');
// let formattedString = formatString(inputString);
// alert(formattedString); 


//! 5

// function checkForSpam(message){
//     const lowerCaseMessage = message.toLowerCase();
//     const items = ['spam', 'sale']
//     for (const item of items) {
//         if (lowerCaseMessage.includes(item)) {
//             return true;
//         } else {
//             return false; 
//         }
//     }
// }

// const message = prompt("Введіть повідомлення:");
// console.log(checkForSpam(message));

//! 6

// let input;
// let numbers = [];

// while(true){
//     input = prompt('Введіть число:')
//     if (input === null || input.trim() === '') {
//         break;
//     }
//     if (!isNaN(input)) {
//         numbers.push(Number(input));
//     } else {
//         alert("Введіть коректне число!");
//     }
// }
// console.log(numbers);

//! 7

function isLoginValid(login){
    if ( login.length >= 4 &&  login.length <= 16){
        return true;
    } else {
        return false;
    }
}

function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}

function addLogin(allLogins, login) {

    while (!isLoginValid(login) || !isLoginUnique(allLogins, login)) {
        if (!isLoginValid(login)) {
            alert('Помилка! Логін повинен бути від 4 до 16 символів');
        } else if (!isLoginUnique(allLogins, login)) {
            alert('Такий логін уже використовується!');
        }
        login = prompt('Введіть свій логін ще раз:');
    }

    allLogins.push(login.toLowerCase());
    alert('Логін успішно доданий!');

}

const allLogins = ['amalia', 'stepan', 'nazar', 'vova', 'pavlo', 'sasha']
const login = prompt('Введіть свій логін:');
addLogin(allLogins, login);
console.log(allLogins);