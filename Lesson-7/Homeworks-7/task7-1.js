/*#XjJuucOMR0*/

/*– Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об’єктами new User(….)*/
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrayOfUsers = [];

let user1 = new User(17, 'Anna', 'Sweden', 'ajhshh@shshsk', '+9676537213');
let user2 = new User(3, 'Dana', 'Pavlova', 'sjdhhg@shdjfasm', '+9627346284');
let user3 = new User(32, 'Ivan', 'Ivanov', 'gsdrgdf@fjjjdd', '+97263524671');
let user4 = new User(41, 'Sofia', 'Kilian', 'rgaoriojnsdjdj@dvhsjkn', '+98746537821');
let user5 = new User(63, 'Kokos', 'Kokosov', 'okokokok@okokok', '+973648294008');
let user6 = new User(46, 'John', 'Dou', 'dhfkvkm@shdnkdk', '+983652647978');
let user7 = new User(7, 'Kaila', 'Maklou', 'kmmclcodhn@whnskhf', '+98635678222');
let user8 = new User(93, 'Makar', 'Zaharov', 'nfaikdsf@okkndv', '+98765335678');
let user9 = new User(9, 'Andrey', 'Little', 'hdbnjc@dkgdbkn', '+938374893938');
let user10 = new User(10, 'Konstantin', 'Horoshev', 'jknvsk@wusgd', '+93837663739');


arrayOfUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(arrayOfUsers);


/*#2ikXsE2WiKZ*/
/*– Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)*/
console.log(arrayOfUsers.filter(user1 => user1.id % 2 === 0));


/*#pOeHKct*/
/*– Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
arrayOfUsers.sort(function (a, b) {
    return a.id - b.id;
});
console.log(arrayOfUsers);


/*#nkMXISv*/

/*– створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об’єктами Client*/
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let clients = [
    new Client(7, 'Dina', 'Oganova', 'sjhshg@djdhdggs', '+92382726378', [new Product({title: 'milk'}, {price: 79}), new Product({title: 'oranges'}, {price: 79})]),
    new Client(9, 'Dana', 'Safonova', 'wegsgv@rhykljt', '+345y456456', [new Product({title: 'milk'}, {price: 125}), new Product({title: 'kiwi'}, {price: 92}), new Product({title: 'meat'}, {price: 250}), new Product({title: 'milk'}, {price: 125})]),
    new Client(32, 'Inna', 'tailor', 'egryrdth@yukgnbd', '+654464644', [new Product({title: 'kefir'}, {price: 47}), new Product({title: 'tangerines'}, {price: 54}), new Product({title: 'milk'}, {price: 125})]),
    new Client(9, 'Anna', 'palma', 'sfsrhtr@jhytysg', '+96425453435', [new Product({title: 'sausages'}, {price: 210}), new Product({title: 'fish'}, {price: 189})]),
    new Client(17, 'Gustav', 'Sokova', 'ewgeryhrt@frgwefe', '+5775434248', [new Product({title: 'milk'}, {price: 125}), new Product({title: 'meat'}, {price: 170}), new Product({title: 'oranges'}, {price: 79})]),
    new Client(61, 'Sofia', 'Evramenko', 'geryrtgh@etefgf', '+9654334567', [new Product({title: 'pasta'}, {price: 79}), new Product({title: 'mango'}, {price: 130})]),
    new Client(1, 'Linda', 'Yo-yo-yo', 'rgethtrf@ergrehs', '+9675423457', [new Product({title: 'rice', price: 73})]),
    new Client(63, 'Andrey', 'Krapivka', 'wegrgre@egwgs', '+9655463565', [new Product({title: 'sausages'}, {price: 193}), new Product({title: 'mango'}, {price: 105}), new Product({title: 'meat'}, {price: 157}), new Product({title: 'sausages'}, {price: 187}), new Product({title: 'oranges'}, {price: 82})]),
    new Client(93, 'Kokos', 'Kokosov', 'grrge@rghrge', '+452354534556', [new Product({title: 'milk'}, {price: 125}), new Product({title: 'oranges'}, {price: 79}), new Product({title: 'sausages'}, {price: 230})]),
    new Client(3, 'Liza', 'Riks', 'rgegee@egregerg', '+436363634633', [new Product({title: 'rice'}, {price: 70}), new Product({title: 'mango'}, {price: 143}), new Product({title: 'oranges'}, {price: 79}), new Product({title: 'sausages'}, {price: 210})])
];
console.log(clients);


/*#8abtVjRv*/
/*– Взяти масив (Client [] з попереднього завдання).
Відсортувати його за кількістю товарів в полі order по зростанню. (sort)*/

let clientArr = [
    new Client(2, 'Dina', 'Oganova', 'sjhshg@djdhdggs', '+92382726378', [{
    title: 'milk',
    price: 79
}, {title: 'oranges', price: 79}]),
    new Client(8, 'Dana', 'Safonova', 'wegsgv@rhykljt', '+345y456456', [{title: 'milk', price: 125}, {
        title: 'kiwi',
        price: 92
    }, {title: 'meat', price: 250}, {title: 'milk', price: 125}]),
    new Client(32, 'Inna', 'tailor', 'egryrdth@yukgnbd', '+654464644', [{
        title: 'kefir',
        price: 47
    }, {title: 'tangerines', price: 54}, {title: 'milk', price: 125}]),
    new Client(9, 'Anna', 'palma', 'sfsrhtr@jhytysg', '+96425453435', [{title: 'sausages', price: 210}, {
        title: 'fish',
        price: 189
    }]),
    new Client(17, 'Gustav', 'Sokova', 'ewgeryhrt@frgwefe', '+5775434248', [{title: 'milk', price: 125}, {
        title: 'meat',
        price: 170
    }, {title: 'oranges', price: 79}]),
    new Client(61, 'Sofia', 'Evramenko', 'geryrtgh@etefgf', '+9654334567', [{
        title: 'pasta',
        price: 79
    }, {title: 'mango', price: 130}]),
    new Client(4, 'Linda', 'Yo-yo-yo', 'rgethtrf@ergrehs', '+9675423457', [{title: 'rice', price: 73}]),
    new Client(63, 'Andrey', 'Krapivka', 'wegrgre@egwgs', '+9655463565', [{
        title: 'sausages',
        price: 193
    }, {title: 'mango', price: 105}, {title: 'meat', price: 157}, {title: 'sausages', price: 187}, {title: 'oranges', price: 82}]),
    new Client(93, 'Kokos', 'Kokosov', 'grrge@rghrge', '+452354534556', [{title: 'milk', price: 125}, {
        title: 'oranges',
        price: 79
    }, {title: 'sausages', price: 230}]),
    new Client(3, 'Liza', 'Riks', 'rgegee@egregerg', '+436363634633', [{title: 'rice', price: 70}, {title: 'mango', price: 143}, {title: 'oranges', price: 79}, {title: 'sausages', price: 210}])
];

clientArr.sort((a, b) => {
    return a.order.length - b.order.length;
})
console.log(clientArr);


/*#vV9a6584I5*/

/*– Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
    — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
    — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
    — changeYear (newValue) – змінює рік випуску на значення newValue
    — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car*/
function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key, this[key]);
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) this.maxSpeed = maxSpeed + newSpeed;
    }
    this.changeYear = function (newYear) {
        if (newYear > 0) this.year = newYear;
    }
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    }
}

let car = new Car('Hundai Sonata', 'Korea', 2016, 200, 4);

console.log(car.drive());
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2017);
car.addDriver({name: 'Add'});

console.log(car);

/*#5kla3yMpgp*/

/*– (Те саме, тільки через клас)
Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
    — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
    — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
    — changeYear (newValue) – змінює рік випуску на значення newValue
    — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car*/
class Car1 {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newYear) {
        if (newYear > 0) this.year = newYear;
    }

    addDriver(driver) {
        if (driver) this.driver = driver;
    }
}

let car1 = new Car1('Hundai Sonata', 'Korea', 2014, 180, 4);

console.log(car1.drive());
car1.info();
car1.increaseMaxSpeed(200);
car1.changeYear(2016);
car1.addDriver({name: 'Igor'});

console.log(car1)


/*#zg6Fifnqig*/

/*– створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку*/
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('John', 25, 35);
let cinderellas = [new Cinderella('Элла', 22, 35),
    new Cinderella('Tina', 27, 37),
    new Cinderella('Lia', 20, 38),
    new Cinderella('Anna', 21, 39),
    new Cinderella('Dina', 31, 37),
    new Cinderella('Zoe', 25, 36),
    new Cinderella('Carolina', 31, 36),
    new Cinderella('vanda', 24, 37),
    new Cinderella('Linda', 21, 40),
    new Cinderella('Mia', 19, 37),
]

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe) {
        console.log(cinderella);
    }
}


/*#gsKLAsNWM*/
/*Через Array.prototype. створити власний foreach, filter*/

Array.prototype.myForEach = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
const numbers = [73, 12, 10, 7, 6, 42];

console.log(numbers.myForEach(numbers, (number, i, array) => console.log(number, i, array)));


Array.prototype.myFilter = (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
};
const newResult = numbers.myFilter(numbers, (num) => num % 2 === 0);

console.log(newResult);
