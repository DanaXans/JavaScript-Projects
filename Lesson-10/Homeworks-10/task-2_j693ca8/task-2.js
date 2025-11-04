/*#j693ca8*/
/*– створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача*/
let input = document.createElement("input");
input.id = 'ageOfUser';

let button2 = document.createElement("button");
button2.id = 'button2';
button2.innerText = 'OK';

let wrapperOfInput = document.createElement("div");
wrapperOfInput.id = 'wrapperOfInput';

document.body.appendChild(wrapperOfInput);
wrapperOfInput.append(input, button2);


button2.onclick = function () {
    if (input.value < 18) {
        confirm('you are under 18 years old');
    }
    if (input.value >= 18) {
        confirm('OK OK OK');
    }
}