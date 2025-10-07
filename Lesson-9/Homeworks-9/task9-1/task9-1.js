/*#8Nmt60ZT*////////////////////////////////////////////////
/*
– створити блок,
– додати йому класи wrap, collapse, alpha, beta
– додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
– додати цей блок в body.
– клонувати його повністю, та додати клон в body.*/

const div1 = document.createElement("div");
div1.classList.add("wrap", "collapse", "alpha", "beta");

div1.innerText = "Hello World!";
div1.style.backgroundColor = "#8b9dea";
div1.style.color = "#151833";
div1.style.fontSize = "20px";

document.body.appendChild(div1);
const cloneDiv1 = div1.cloneNode(true);
document.body.appendChild(cloneDiv1);


/*#OPLI89c9G*///////////////////////////////////////////////
/*– Є масив:
[‘Main’,’Products’,’About us’,’Contacts’]
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/
const arr = ['Main', 'Products', 'About us', 'Contacts'];

const list = document.createElement("ul");
document.body.appendChild(list);
list.classList.add("menu");

for (const element of arr) {
    const li = document.createElement("li");
    li.innerText = element;
    list.appendChild(li);
}


/*#jeBqHV525U5*/////////////////////////////////////////////
/*– Є масив
let coursesAndDurationArray = [
    {title: ‘JavaScript Complex’, monthDuration: 5},

    {title: ‘Java Complex’, monthDuration: 6},

    {title: ‘Python Complex’, monthDuration: 6},

    {title: ‘QA Complex’, monthDuration: 4},

    {title: ‘FullStack’, monthDuration: 7},

    {title: ‘Frontend’, monthDuration: 4}
];
Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/
const blockDiv = document.createElement('div');
const coursesDiv = document.getElementsByClassName('courses')[0];

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('course');
    div.innerHTML = `${course.title}  ${course.monthDuration}`;
    coursesDiv.appendChild(div);
}

/*За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>
 з title  елементу, та <p class=’description’> з monthDuration елементу.
/*Завдання робити через цикли.*/
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');
    const h1=document.createElement('h1');
    h1.classList.add('heading');
    const p = document.createElement('p');
    p.classList.add('description');

    h1.innerText = course.title;
    p.innerText = course.monthDuration;

    div.append(h1, p);
    document.body.appendChild(div);
}