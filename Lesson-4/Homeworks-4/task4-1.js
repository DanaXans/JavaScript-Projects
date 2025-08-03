/*I2XsG6f*/

/*– створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б*/
function square(aNum, bNum) {
    const result = aNum * bNum;
    console.log(result);
    return result;
}

square(5, 7);


/*ETGAxbEn8l*/

/*– створити функцію, яка обчислює та повертає площу кола з радіусом r*/
function roundObject(radius) {
    return Math.PI * radius * radius;
}

console.log(roundObject(20));


/*Mbiz5K4yFe7*/

/*– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r*/
function cilinder(radius, height) {
    return 2 * Math.PI * radius * height
}

console.log(cilinder(10, 10));


/*SIdMd0hQ*/

/*– створити функцію, яка приймає масив та виводить кожен його елемент*/
function arr(array) {
    for (const object of array) {
        console.log(object);
    }
}

arr([12, 13, 14, 15]);

/*59g0IsA*/

/*– створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент*/
function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph('Hello');


/*hOL6126*/

/*– створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий*/
function list(line) {
    document.write(`<ul>
                                                    <li>${line}</li>
                                                    <li>${line}</li>
                                                    <li>${line}</li>
                                            </ul>`);
}

list('okten');


/*0Kxco1edSN*/

/*– створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write*/
function foobar(text, counter) {
    document.write('<ul>')
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

foobar('text', 10);


/*gEFoxMMO*/

/*– створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
та будує для них список (ul li) та виводить його через document.write*/
function array(primitiveArrays) {
    document.write('<ul>')
    for (const item of primitiveArrays) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}

array([5, 10, 100.7, true, 'okay']);


/*bovDJDTIjt*/

/*– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
Для кожного об’єкту окремий блок.*/
function justArray(users) {
    for (const user of users) {
        document.write(`<div>${user.name} ${user.age} ${user.id}</div>`)
    }
}

justArray([
    {
        name: 'Lisa',
        age: 25,
        id: 1,
    },
    {
        name: 'Dana',
        age: 20,
        id: 2,
    },
    {
        name: 'Olya',
        age: 27,
        id: 3,
    }
]);


/*pghbnSB*/

/*– створити функцію яка повертає найменьше число з масиву*/
function value(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(value([10, 15, 20, 25, -120]));


/*EKRNVPM*/

/*– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
 Приклад sum([1,2,10]) //->13*/
function sum(array) {
    let counter = 0;
    for (const item of array) {
        counter = counter + item;
    }
    return counter;
}

console.log(sum([10, 1, 2,]));


/*kpsbSQCt2Lf*/

/*– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));


/*mkGDenYnNjn.html*/

/* Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400*/
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let chosenOne;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenOne = item;
        }
    }
    return sumUAH / chosenOne.value;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));