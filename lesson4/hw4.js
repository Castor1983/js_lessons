
// task 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let multiply = function (a, b) {
    return a * b;
}
console.log(multiply(10, 20));

// task 2- створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = function (r) {
    return r * r * 3.14;
}
console.log(circle(5))

// task 3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cilinder = function (h, r,) {
   return r * r * 3.14 * h;
}
console.log(cilinder(4, 5));

// task 4- створити функцію яка приймає масив та виводить кожен його елемент
let arrByElement = function (arr)  {
    for (const arrElement of arr) {
        console.log(arrElement);
    };
}
arrByElement([1, 2, 4, 8, 'okten']);

// task 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParag = function (text) {
    document.write(`<p>${text}</p>`);
}
createParag('school Okten');

// task 6- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createList = function (list) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${list}</li>`);

    }
    document.write(`</ul>`);
}
createList("Okten cchool");
// task 7 ??????//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createList2 = function (list, counter) {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${list}</li>`);

    }
    document.write(`</ul>`);
}
createList2("Okten", 10);

// task 8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createListByArr = function (arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}
createListByArr([1, 2, 3, 4, 4, 5, 7]);

// task 9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let createBlockByObject = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>`);

        document.write(`<ul>`);
        document.write(`<li>${arr[i].id}</li>`);
        document.write(`<li>${arr[i].name}</li>`);
        document.write(`<li>${arr[i].age}</li>`);
        document.write(`</ul>`);
        document.write(`</div>`);
    }
}
createBlockByObject([
    {name: 'vasya', age: 31, id: 122},
    {name: 'petya', age: 30, id: 3333},
    {name: 'kolya', age: 29, id: 22222},
    {name: 'olya', age: 28, id: 11},
    {name: 'max', age: 30, id: 22},
    {name: 'anya', age: 31, id: 333},
    {name: 'oleg', age: 28, id: 444},
    {name: 'andrey', age: 29, id: 2232},
    {name: 'masha', age: 30, id: 5565},
    {name: 'olya', age: 31, id: 7878},
    {name: 'max', age: 31, id: 9876}
]);


// task 10- створити функцію яка повертає найменьше число з масиву
let minNumber = function (arr) {
    let temp = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (temp > arr[i + 1]) {
            temp = arr[i + 1];
        }
    }
    return temp;
}
console.log(minNumber([4, 2, 3, 5, -1, 8, -10, 4, 1]));

// task 11- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumNumber = function (arr) {

    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i];
    }
    return temp;
}
console.log(sumNumber([4, 2, 3, 5, -1, 8, -10, 4, 1]));

// task 12- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = function (arr, indexChange1, indexChange2) {
    let temp = arr[indexChange1];
    arr[indexChange1] = arr[indexChange2];
    arr[indexChange2] = temp;
    return arr;
}
console.log(swap([4, 2, 3, 5, -1, 8, -10, 4, 1], 0, 6));

    // task 13 Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

    let exchange = function (sumUAH, currencyValues, exchangeCurrency) {
        for (const currencyValuesElement of currencyValues) {
            if (currencyValuesElement.currency === exchangeCurrency) {
                return sumUAH / currencyValuesElement.value;
            }
        }
    }
console.log(exchange(10000, [{currency:'USD',value:40}, {currency:'EUR',value:50}], 'EUR'))
