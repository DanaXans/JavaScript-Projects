/*В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
сигнатура функції –
addToLocalStorage(arrayName:string,objToAdd:any{}):void*/

// arr=['11']

function addToLocalStorage(arrayKey, objToAdd) {
    const lsItem = localStorage.getItem(arrayKey);
    if (!lsItem) {
        console.error('Item not found');
    }
    const arr = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        arr.push(objToAdd);
    }
    localStorage.setItem(arrayKey, JSON.stringify(arr));
}

addToLocalStorage('sessions', {object:'hi'});