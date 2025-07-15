/*67kfznmiMl*/
let arr = [
    110,
    'color',
    true,
    {name: 'John'},
    false,
    {age: 25},
    3.14,
    null,
    'set',
    NaN]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


/*LARqoUj5I*/
let book1 = {
    title:  'ABC',
    pageCount: 120,
    genre: 'triller'
};
let book2 = {
    title: 'DEF' ,
    pageCount: 70,
    genre: 'tragedy'
};
let book3 = {
    title: 'GHI' ,
    pageCount: 210,
    genre: 'fiction'
};


/*sA3Gg1sCp*/
let bookFirst = {
    title: 'ABC' ,
    pageCount: 150,
    genre: 'tragedy',
    authors:[
        {name: 'Olga',
        age: 30},
        {name: 'Taras',
            age: 31}
    ]
};
let bookSecond = {
    title: 'DEF' ,
    pageCount: 270,
    genre: 'epic',
    authors:[
        {name: 'Stanislav',
            age: 28},
        {name: 'Lisa',
        age: 22}
    ]
};
let bookThird = {
    title: 'GHI' ,
    pageCount: 345,
    genre: 'romance',
    authors:[
        {name: 'Dmitry',
            age: 34},
        {name: 'Daria',
        age: 35}
    ]
};


/*jCHFnEbdmFd*/
let users = [
    {name: 'John', password: '12345', username: 'rty'},
    {name: 'Anna', password: '6789', username: 'uyt'},
    {name: 'Kira', password: '2356', username: 'poh'},
    {name: 'Alex', password: '1357', username: 'sgr'},
    {name: 'Sasha', password: '2468', username: 'drt'},
    {name: 'Lira', password: '9765', username: 'noo'},
    {name: 'Daria', password: '3579', username: 'ate'},
    {name: 'Stepan', password: '53061', username: 'asd'},
    {name: 'Misha', password: '36478', username: 'qwe'},
    {name: 'Olga', password: '3561', username: 'ghj'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


/*coYydZuaeEB*/
let weekTemp =[
    {
        day: 'monday', values: {
            morning: 25,
            day: 33,
            night: 17
        }
    },
    {
        day: 'tuesday', values: {
            morning: 23,
            day: 37,
            night: 20
        }
    },
    {
        day: 'wednesday', values: {
            morning: 25,
            day: 38,
            night: 22
        }
    },
        {
            day: 'thursday', values: {
                morning: 18,
                day: 28,
                night: 15
        }
    },
    {
        day: 'friday', values: {
            morning: 20,
            day: 26,
            night: 17
        }
    },
    {
        day: 'saturday', values: {
            morning: 21,
            day: 30,
            night: 20
        }
    },
    {
        day: 'sunday', values: {
            morning: 20,
            day: 31,
            night: 18
        }
    }
]


/*bAUsaq6LI*/
let x = +prompt ('enter number 1, 0, -3');
if (x !== 0) {
    console.log('right');
} else {
    console.log('wrong');
}


/*3ckURgvs*/
let time = 26;
if (time >=0 && time <15) {
    console.log('first part');
}
else if (time >=15 && time <=30) {
    console.log('second part');
}
else if (time >=30 && time <=45) {
    console.log('third part');
}
else if (time >=45 && time <=60) {
    console.log('forth part');
}


/*UMoNq4biWGe*/
let day = 3;
if (day >=1&& day<10) {
    console.log('first');
}
else if (day >=10 && day<20) {
    console.log('second');
}
else if (day >=20 && day<31) {
    console.log('third');
}


/*KzrtqyQ*/
switch (2) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sanday');
        break;
    default:
        console.log('?????????');
}


/*uwsz1RnTQJ1*/
let a = 5;
let b = 3;

if (a > b) {
    console.log('a');
}
else if (a < b) {
    console.log('b');
}
else if (a === b) {
    console.log('====');
}


/*iBvqtjEm*/
let X = 1;
if ( !X ) {
    X = 'default';
}


/*awLXL6TBzg*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration>5) {
    console.log('Супер!');
}
if(coursesAndDurationArray[1].monthDuration>5) {
    console.log('Супер!');
}
if (coursesAndDurationArray[2].monthDuration>5) {
    console.log('Супер!');
}
if (coursesAndDurationArray[3].monthDuration>5) {
    console.log('Супер!');
}
if (coursesAndDurationArray[4].monthDuration>5) {
    console.log('Супер!');
}
if (coursesAndDurationArray[5].monthDuration>5) {
    console.log('Супер!');
}