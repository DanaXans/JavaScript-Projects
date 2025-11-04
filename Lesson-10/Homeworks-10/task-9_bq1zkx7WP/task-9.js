/**** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
 при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається*/
const div = document.getElementById('divWithNum');
let ua = 'грн';

let number = localStorage.getItem('number') || 100;
div.innerHTML = number + ua;

localStorage.setItem('number', number);

setTimeout(() => {
    let num = localStorage.getItem('number')
    let number = JSON.parse(num);
    number += 10
    div.innerText = number + ua;
    localStorage.setItem('number', number);
}, 11000);
