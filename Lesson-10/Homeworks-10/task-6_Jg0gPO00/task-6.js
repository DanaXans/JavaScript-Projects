/*створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок*/
const converter = document.getElementById('converter');
const divResult = document.getElementById('div');

let pounds;
converter.oninput = function () {
    const kilos = converter.value;
    pounds = kilos * 2.2;
    divResult.innerText = pounds;

    // divResult.innerText = +this.value*2.2;
}