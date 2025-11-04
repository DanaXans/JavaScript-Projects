
/*#2VaLt4vDczH*/
/*є сторінка, на якій є блок, в кому знаходиться цифра.
Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1*/

let divWithNumber = document.createElement("div");
divWithNumber.id = 'divWithNumber';

let numberOfStorage = +localStorage.getItem('number');
numberOfStorage += 1;
localStorage.setItem('number', numberOfStorage);
divWithNumber.innerText = numberOfStorage;

document.body.appendChild(divWithNumber);