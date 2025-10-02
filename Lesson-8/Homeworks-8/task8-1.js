/*#iz6emEsP2BA*/
/*– є масив
let coursesAndDurationArray = [

    {title: ‘JavaScript Complex’, monthDuration: 5},

    {title: ‘Java Complex’, monthDuration: 6},

    {title: ‘Python Complex’, monthDuration: 6},

    {title: ‘QA Complex’, monthDuration: 4},

    {title: ‘FullStack’, monthDuration: 7},

    {title: ‘Frontend’, monthDuration: 4}

];
за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції*/

let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}
];

const coursesWithId = coursesAndDurationArray.map((course, index) => ({...course, id: index + 1}))
console.log(coursesWithId);

/*#AiN5CoUQ*/
/*Створити функцію, яка робить глибоку копію об’єкта.
Додати перевірки на undefined, null, NaN.
Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.*/

const object = {
    name: 'Nick',
    age: 23,
    greeting() {
        return `Hello, my name is ${object.name}`;
    }
}

function check(object) {
    if (object) {
        const functions = [];
        Object.keys(object).forEach(key => {
            if (typeof object[key] === 'function') {
                const copyFunction = object[key].bind({});
                functions.push({copyFunction, key});
            }
        })
        const objectRedone = JSON.parse(JSON.stringify(object));
        for (const func of functions) {
            objectRedone[func.key] = func.copyFunction;
        }
        //console.log(objectRedone);
        return objectRedone;
    }
    throw new Error('ERROR')
}

console.log(check(object));
//console.log(object.greeting());

