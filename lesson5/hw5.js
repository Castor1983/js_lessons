// task 1

let multiply = (a, b) => a * b;
console.log(multiply(10, 20));

// task 2
let circle = r =>  r * r * 3.14;
console.log(circle(5));

// task 3
let cilinder = (h, r,) => r * r * 3.14 * h;
console.log(cilinder(4, 5));

// task 4
let arrByElement = arr => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
arrByElement([1, 2, 4, 8, 'okten']);

// task 5
let createParag = text => document.write(`<p>${text}</p>`);
createParag('school Okten');

// task 6
let createList = list => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${list}</li>`);
    }
    document.write(`</ul>`);
}
createList("Okten cchool");

// task 7 ??????
let createList2 = (list, counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${list}</li>`);
    }
    document.write(`</ul>`);
}
createList2("Okten", 10);

// task 8
let createListByArr = arr => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}
createListByArr([1, 2, 3, 4, 4, 5, 7]);

// task 9
let createBlockByObject = arr => {
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

// task 10
let minNumber = arr => {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (temp > arr[i + 1]) {
            temp = arr[i + 1];
        }
    }
    return temp;
}
console.log(minNumber([4, 2, 3, 5, -1, 8, -10, 4, 1]));

// task 11
let sumNumber = arr => {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i];
    }
    return temp;
}
console.log(sumNumber([4, 2, 3, 5, -1, 8, -10, 4, 1]));

// task 12
let swap = (arr, indexChange1, indexChange2) => {
    let temp = arr[indexChange1];
    arr[indexChange1] = arr[indexChange2];
    arr[indexChange2] = temp;
    return arr;
}
console.log(swap([4, 2, 3, 5, -1, 8, -10, 4, 1], 0, 6));

// task 13

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currencyValuesElement of currencyValues) {
        if (currencyValuesElement.currency === exchangeCurrency) {
            return sumUAH / currencyValuesElement.value;
        }
    }
}
console.log(exchange(10000, [{currency:'USD',value:40}, {currency:'EUR',value:50}], 'EUR'))