/*#dFeorS3m7u*/
/*– Знайти та вивести довжину наступних стрінгових значень
 ‘hello world’
‘lorem ipsum
‘javascript is cool’*/

let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);


/*#8lld9HMxXWB*/
/*– Перевести до великого регістру наступні стрінгові значення
      ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’*/
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());


/*#ClDsAm7xba7*/
/*– Перевести до нижнього регістру наступні стрінгові значення
      ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’*/
let string1 = 'HELLO WORLD';
console.log(string1.toLowerCase());
let string2 = 'LOREM IPSUM';
console.log(string2.toLowerCase());
let string3 = 'JAVASCRIPT IS COOL';
console.log(string3.toLowerCase());


/*#0b89BkYZwu*/
/*– Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.*/
let str = ' dirty string   ';
let cleanStr = str.trim();
console.log(cleanStr);


/*#bfoJuse4ZzP*/

/*– Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = ‘Ревуть воли як ясла повні’;
    let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]*/


function stringToarray(str) {
    if (str) {
        return str.split(' ');
    }
    return [' '];
}

console.log(stringToarray('Ревуть воли як ясла повні'));


/*#Rbr5kEQ*/
/*– є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.*/
const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const string = numbers.map(numbers => numbers + '');
console.log(string);


/*#5hqyKTfmc*/
/*– створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,’ascending’) // [3,11,21]
sortNums(nums,’descending’) // [21,11,3]*/
let nums = [11, 21, 3];

function sortNums(array, direction) {
    if (direction === 'ascending') return array.sort((a, b) => a - b);
    if (direction === 'descending') return array.sort((a, b) => b - a);
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


/*#yo06d74c1C*/
/*– є масив
let coursesAndDurationArray = [
    {title: ‘JavaScript Complex’, monthDuration: 5},
    {title: ‘Java Complex’, monthDuration: 6},
    {title: ‘Python Complex’, monthDuration: 6},
    {title: ‘QA Complex’, monthDuration: 4},
    {title: ‘FullStack’, monthDuration: 7},
    {title: ‘Frontend’, monthDuration: 4}
];
 — відсортувати його за спаданням за monthDuration
  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
  */

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let modifiedArray = coursesAndDurationArray
    .sort((a, b) => {
        return b.monthDuration - a.monthDuration
    })
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = index + 1;
        return value;
    });
console.log(modifiedArray);


/*#4LJn7zBx*/
/*взяти з arrays.js масив coursesArray
–написати пошук всіх об’єктів, в яких в modules є sass
–написати пошук всіх об’єктів, в яких в modules є docker*/

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));


/*#bolvdlhP*/
/* описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
Після опису, використовуючи функції масивів:
Приклад моделі об’єкту карти:
{
    cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
    value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
    color:”, // ‘red’,’black’
}*/
const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const cards = [];

for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuits: suit, value: value};
        if (suit === 'clubs' || suit === 'spade') {
            card.color = 'black';
        } else {
            card.color = 'red';
        }
        cards.push(card);
    }
}
console.log(cards);
/* – знайти піковий туз*/
console.log(cards.find(card => card.value === 'ace' && card.cardSuits === 'spade'));
/* – всі шістки*/
console.log(cards.filter(card => card.value === '6'));
/* – всі червоні карти*/
console.log(cards.filter(card => card.color === 'red'));
/* – всі буби*/
console.log(cards.filter(card => card.cardSuits === 'diamond'));
/* – всі трефи від 9 та більше*/
console.log(cards.filter(card => card.cardSuits === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8')));


/*#EP5I1UUzAX*/
/*Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт

Приклад моделі кінцевого об’єкту
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
*/
console.log(cards.reduce((accumulator, card) => {
        if (card.cardSuits==='spade') {
            accumulator.spades.push(card);
        }else if(card.cardSuits==='diamond') {
            accumulator.diamonds.push(card);
        }else if(card.cardSuits==='heart') {
            accumulator.hearts.push(card);
        }else{
            accumulator.clubs.push(card);
        }
        return accumulator;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    }));