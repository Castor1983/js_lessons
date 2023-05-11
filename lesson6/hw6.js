// task 1- Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world';
console.log(str.length);
let str1 = 'lorem ipsum';
console.log(str1.length);
let str2 = 'javascript is cool';
console.log(str2.length);

// task 2 - Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str.toUpperCase());
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());

// task 3 - Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str3 = 'HELLO WORLD';
console.log(str3.toLowerCase());
let str4 = 'LOREM IPSUM';
console.log(str4.toLowerCase());
let str5 = 'JAVASCRIPT IS COOL';
console.log(str5.toLowerCase());

// task 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str6 = ' dirty string   ';
console.log(str6.trim());

/* task 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
   let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
*/

let str7 = 'Ревуть воли як ясла повні';
let stringToarray = str => {
    let arr = str.split(' ');
    console.log(arr);
}

stringToarray(str7);

// task 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNumber = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrString = arrNumber.map(String);
console.log(arrString);


/*
task 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
    або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
*/

let nums = [11, 21, 3];

/*let sortNums = function (arr, direction) {
    if (direction === 'ascending') {
        return arr.sort(function (a, b) {
            return a - b;
        });
    } else if (direction === 'descending')
        return arr.sort(function (a, b) {
            return b - a;
        });
}
console.log(sortNums(nums, 'descending'));*/


let sortNums = (arr, direction) => {
    switch (direction) {
        case 'ascending':
            return arr.sort((a, b) => a - b);
            break;
        case 'descending':
            return arr.sort((a, b) => b - a);
    }
    ;
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


// task 8 - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonthDuration = arr => arr.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortMonthDuration(coursesAndDurationArray));

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterFiveMonth = arr => arr.filter(value => value.monthDuration > 5);
console.log(filterFiveMonth(coursesAndDurationArray));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let createId = arr => arr.map((value, index = 0) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration, status: value.status};
});
console.log(createId(coursesAndDurationArray));

// task 9    описати колоду карт (від 6 до туза без джокерів)

let cardDeck = [
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
]

//- знайти піковий туз
let aceSpade = arr => arr.find(el => el.value === 'ace' && el.cardSuit === 'spade');
console.log(aceSpade(cardDeck));

//- всі шістки
let sixAll = arr => arr.filter(el => el.value === '6');
console.log(sixAll(cardDeck));

//- всі червоні карти
let redAll = arr => arr.filter(el => el.color === 'red');
console.log(redAll(cardDeck));

//- всі буби
let diamondAll = arr => arr.filter(el => el.cardSuit === 'diamond');
console.log(diamondAll(cardDeck));

//- всі трефи від 9 та більше !!!!!!! НЕ ФИЛЬТРУЕТ 10================================================

let clubAll = arr => arr.filter(el => el.cardSuit === 'clubs' && el.value >= '9');
console.log(clubAll(cardDeck));


// task 10  Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let cardsToSuit = cardDeck.reduce((total, amount) => {
    switch (amount.cardSuit) {
        case 'spade':
            total.spades.push(amount);
            break;
        case 'diamond':
            total.diamonds.push(amount);
            break;
        case 'heart':
            total.hearts.push(amount);
            break;
        case 'clubs':
            total.clubs.push(amount);
    }
    return total;
}, { spades: [], diamonds: [], hearts: [],  clubs: []
});
    console.log(cardsToSuit);

// task 11   взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

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
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
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
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];


//--написати пошук всіх об'єктів, в який в modules є sass
    let allModSass = arr => arr.filter(el => el.modules.find(mod => mod === 'sass'));
    console.log(allModSass(coursesArray));

//--написати пошук всіх об'єктів, в який в modules є docker
    let allModDocker = arr => arr.filter(el => el.modules.find(mod => mod === 'docker'));
    console.log(allModDocker(coursesArray));