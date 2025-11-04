/* Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.*/

const generator = document.forms["generatorOfTable"];
const table = document.getElementById("table");

generator.onsubmit = (event) => {
    table.innerHTML = "";
    event.preventDefault();
    const linesValue=generator.lines.value;
    const cellsValue=generator.cells.value;
    const cellsContent=generator.cellsContent.value;
    console.log(linesValue,cellsValue,cellsContent);

    for (let i = 0; i <= linesValue; i++) {
        const tr=document.createElement("tr");
        for (let j = 0; j < cellsValue; j++) {
            const td=document.createElement("td");
            td.innerText=cellsContent;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}