/*I2XsG6f*/
/*– створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б*/
const solution = (aNum, bNum) => aNum * bNum;
const result = solution(5, 3);
console.log(result);


/*ETGAxbEn8l*/
/*– створити функцію, яка обчислює та повертає площу кола з радіусом r*/
const roundObject = (radius) => Math.PI * radius * radius;
console.log(roundObject(20));


/*Mbiz5K4yFe7*/
/*– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r*/
const cilinder = (radius, height) => 2 * Math.PI * radius * height;
console.log(cilinder(10, 10));


/*SIdMd0hQ*/
/*– створити функцію, яка приймає масив та виводить кожен його елемент*/
const arr = (array) => {
    for (const object of array) {
        console.log(object);
    }
}
arr([10, 12, 11, 13, 15]);


/*59g0IsA*/
/*– створити функцію, яка створює параграф з текстом. Текст задати через аргумент*/

const paragraph = (text) => {
    document.write(`<p>${text}</p>`);
}
paragraph('Hello!');


/*hOL6126*/
/*– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
const list = (line) => {
    document.write(`<ul>
                                                    <li>${line}</li>
                                                    <li>${line}</li>
                                                    <li>${line}</li>
                                            </ul>`);
}
list('Hi there!');


/*0Kxco1edSN*/
/*– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
const listOfLines = (text, counter) => {
    document.write('<ul>')
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
listOfLines('Hello, World', 5);


/*gEFoxMMO*/
/*– створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
const array = (arrays) => {
    document.write('<ul>')
    for (const item of arrays) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}
array(['Okten', 15, 17, 22, false]);


/*bovDJDTIjt*/
/*– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
Для кожного об’єкту окремий блок.*/
const justArray = (users) => {
    for (const user of users) {
        document.write(`<div>${user.name} ${user.id} ${user.age}</div>`)
    }
};

justArray([
    {
        name: 'Inna',
        id: 1,
        age: 35,
    },
    {
        name: 'Marina',
        id: 2,
        age: 28,
    },
    {
        name: 'Lisa',
        id: 3,
        age: 22,
    }
]);


/*pghbnSB*/
/*– створити функцію, яка повертає найменше число з масиву*/
const value = (numbers) => {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(value([15, 20, 25, 30, -35]));


/*EKRNVPM*/
/*– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
Приклад sum([1,2,10]) //->13*/
const sum = (array) => {
    let counter = 0;
    for (const item of array) {
        counter = counter + item;
    }
    return counter;
}
console.log(sum([1, 2, 10]));


/*kpsbSQCt2Lf*/
/*– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
console.log(swap([11, 22, 33, 44], 0, 1));


/*mkGDenYnNjn*/
/*– Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250*/
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let chosenOne;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenOne = item;
        }
    }
    return sumUAH / chosenOne.value;
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'))