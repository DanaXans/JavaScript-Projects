/*WpkK0ZH1*/
/*–створити масив з:*/
/*– з 5 числових значень*/
let arr = [1, 8, 123, 3.14];
console.log(arr);
/*– з 5 стічкових значень*/
let arr2 = ['time', 'pipe', 'word', 'life', 'game'];
console.log(arr2);
/*– з 5 значень стрічкового, числового та булевого типу*/
let arr3 = ['divine', 13, true];
console.log(arr3);
/*– та вивести його в консоль*/


/*4aDbSgh*/
/*— Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль*/
let array = ['console', 14, true]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);


/*qLQLJSeN7i*/
let arrayOfItems = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
/*1. перебрати його циклом while*/
/*while (i < arrayOfItems.length) {
    console.log(arrayOfItems[i]);
    i++;
}*/
/*2. перебрати його циклом for*/
for (let i = 0; i < arrayOfItems.length; i++) {
    console.log(arrayOfItems[i]);
}
/*3. перебрати циклом while та вивести  числа тільки з непарним індексом*/
let k = 1;
while (k < arrayOfItems.length) {
    console.log(arrayOfItems[k]);
    k += 2;
}
/*4. перебрати циклом for та вивести  числа тільки з непарним індексом*/
for (let i = 1; i < arrayOfItems.length; i += 2) {
    console.log(arrayOfItems[i]);
}
/*5. перебрати циклом while та вивести  числа тільки парні  значення*/
/*while (i < arrayOfItems.length) {
    if (i % 2 === 0) {
        console.log(arrayOfItems[i])
    }
    i++;
}*/
/*6. перебрати циклом for та вивести  числа тільки парні  значення*/
for (let i = 0; i < arrayOfItems.length; i++) {
    if (i % 2 === 0) {
        console.log(arrayOfItems[i])
    }
    /*7. замінити кожне число, кратне 3, на слово “okten”*/
    while (i<arrayOfItems.length) {
        if (i % 3 === 0) {
            console.log(arrayOfItems[i])
        }
        i++;
    }
}
