
let number = 22;

// task 1 - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 'alex', 3.14, true, 255, 'okten', false, 100, 'school', 'world'];
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

// task 2 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Terminator',
    pageCount: 250,
    genre: 'fantasy'
};

let book2 = {
    title: 'For You and Only You ',
    pageCount: 198,
    genre: 'thriller'
};

let book3 = {
    title: 'Harley Quinn',
    pageCount: 60,
    genre: 'comics'
};

// task 3 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Terminator',
    pageCount: 250,
    genre: 'fantasy',
    authors: [
        {
            name: 'James Cameron',
            age: 55
        },
        {
            name: 'Randall Frakes',
            age: 45
        }
    ]
};

let book5 = {
    title: 'For You and Only You ',
    pageCount: 198,
    genre: 'thriller',
    authors: [
        {
            name: 'Caroline Kepnes',
            age: 44
        },
        {
            name: 'Bill Wisher',
            age: 40
        }
    ]
};

let book6 = {
    title: 'Harley Quinn',
    pageCount: 60,
    genre: 'comics',
    authors: [
        {
            name: 'Rachael Allen',
            age: 33
        },
        {
            name: 'Randall Frakes',
            age: 45
        }
    ]
};

// task 4 - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Vasiliy', username: 'Alpha', password: 'adas123a'},
    {name: 'Petro', username: 'Beast', password: 'acvr2576'},
    {name: 'Mikola', username: 'Brave spirit', password: 'cvfgth64'},
    {name: 'Olga', username: 'Killer', password: '123false'},
    {name: 'Maxim', username: 'Casanova', password: '6544true'},
    {name: 'Ganna', username: 'Phantom', password: 'false1234'},
    {name: 'Oleg', username: 'Chieftain', password: 'fdfsgddgh1'},
    {name: 'Andriy', username: 'Commando', password: 'asdfghjkl'},
    {name: 'Maria', username: 'Rockstar', password: 'zxcvbnmdf'},
    {name: 'Olya', username: 'Banshee', password: 'qwertyui'},
];


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


// task 5 - Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть
// 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let c = -3;
if (c !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// task 6 - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = number;
if (time >= 0 && time <= 15) {
    console.log('Перша чверть години');
} else if (time > 15 && time <= 30) {
    console.log('Друга чверть години');
} else if (time > 30 && time <= 45) {
    console.log('Третя чверть години');
} else if (time > 45 && time <= 59) {
    console.log('Четверта чверть години');
} else {
    console.log('Ви ввели некоректні дані');
}

// task 7 - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 4;
if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада місяця');
} else if (day > 20 && day <= 31) {
    console.log('Третя декада місяця');
} else {
    console.log('Ви ввели некоректні дані');
}


// task 8 - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let dayOfWeek = 2;

switch (dayOfWeek) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Ви ввели некоректні дані');
}

// task 9 - Користувач вводить або має два числа.  Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = -11;
let b = 2;
if (a === b) {
    console.log('Ви ввели однакові числа');
} else if (a > b) {
    console.log(`Максимальне число з двох введених: ${a}`);
} else {
    console.log(`Максимальне число з двох введених: ${b}`);
}

// task 10 - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = '';
if (x === false || x === 0 || x === '' || x === null || x === undefined || x === NaN) {
    x = 'default';
    console.log(x);
}

// task 11 - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}

