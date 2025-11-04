/*#sH8c4er*/
/*– Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.*/
let div1 = document.createElement("div");
div1.id = 'text';
div1.innerText = 'DELETE ME';

let button1 = document.createElement("button");
button1.id = 'button';
button1.innerText = 'Click me';

button1.onclick = function () {
    document.getElementById('text').style.display = 'none';
}

document.body.append(div1,button1);