/****PAGINATION
 зробити масив на 100 об’єктів та дві кнопки prev next//готово
 при завантаженні сторінки з’являються перші 10 об’єктів.//готово
 При натисканні next виводяться наступні 10 об’єктів
 При натисканні prev виводяться попередні 10 об’єктів*/

const next = document.getElementById('but_next');
const prev = document.getElementById('but_prev');
const div = document.getElementById('div');

const arrayElements = Array.from({length: 100}, (item, index) => ({
    id: index + 1,
    title: 'element'
}))

const pageSize = 10;
let page = 0;

prev.onclick = () => {
    if (page > 0) {
        page--;
        render();
    }
}

next.onclick = () => {
    if ((page + 1) * pageSize < arrayElements.length) {
        page++;
        render();
    }
}

function render() {
    const start = page * pageSize;
    const end = Math.min(start + pageSize, arrayElements.length);
    div.innerHTML = '';

    for (let i = start; i < end; i++) {
        const item = document.createElement('div');
        item.textContent = arrayElements[i].id + ' ' + arrayElements[i].title;
        div.appendChild(item);
    }
    prev.disabled = page === 0;
    next.disabled = end >= arrayElements.length;

}

render();