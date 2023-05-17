//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
let cutString = (str, n) => {
    let arrStr = [];
    let counter = 0;
    while (counter < str.length) {
        let cutStr = '';
        if ( (counter + n) <= str.length) {
            for (let j = counter; j < (counter + n); j++) {
                cutStr += str[j];
            }
        } else {
            for (let i = counter; i < str.length; i++) {
                cutStr += str[i];
            }
        }
        arrStr[arrStr.length] = cutStr;
        counter += n;
    }
        return arrStr;
}

document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

let str = 'Kаждый охотник желает знать';
let delete_characters = (str, length) => {
    return str.slice(0, length);
}
document.writeln('<div>');
document.writeln(delete_characters(str, 7)); // Каждый
document.writeln('</div>');

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str1 = "HTML JavaScript PHP";
    let insert_dash = str => {
        let newStr = str.replaceAll(' ', '-')
        return newStr.toUpperCase();
    }
document.writeln(insert_dash(str1)); // 'HTML-JAVASCRIPT-PHP'

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let upFirstLetter = str => str[0].toUpperCase() + str.slice(1);
document.writeln('<div>');
document.writeln(upFirstLetter('ветер, ветер ты могуч'));
document.writeln('</div>');

//- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let userName = user => {
    newUser = '';
    for (const letter of user) {
        if ((letter > '64' && letter > '91') || (letter > '96' && letter < '122')) {
            newUser += letter;
        } else {
            newUser += ' ';
        }
    }

    return newUser;
}
document.writeln('<div>');
document.writeln(userName(n3)); //??????????????????????????????
document.writeln('</div>');

/*let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const randomNumber = function () {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr[arr.length] = Math.round(Math.random() * 100);
    }
    document.writeln('<div>');
    document.writeln(arr) ;
    document.writeln('</div>');
    //- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
    document.writeln('<div>');
    document.writeln(arr.sort());
    document.writeln('</div>');

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
    document.writeln('<div>');
    document.writeln(arr.filter(el => el > 0 && el % 2 === 0));
    document.writeln('</div>');
};
randomNumber();

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = str => {
    let arr = str.split(' ');
    let newStr = '';
    for (let i = 0; i < arr.length; i++) {
let firstUpLetter = arr[i][0].toUpperCase() + arr[i].slice(1)
        if( i === arr.length - 1) {
            newStr += firstUpLetter;
        } else {
            newStr += firstUpLetter + ' ';
        }
    }
    document.writeln(newStr);
}
capitalize('Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.');

//- Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
/*Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com*/

/*Примітка
Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
    Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.*/

//- є масив
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


//-відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sortArr = arr => arr.sort((a, b) => b.modules.length - a.modules.length);
console.log(sortArr(coursesArray));

//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str3 = "Астрономия это наука о небесных объектах";
    let count = (str, stringsearch) => {
        let counter = 0;
        for (const strElement of str) {
            if (strElement === stringsearch)
                counter++;
        }
        return counter;
    }
document.writeln('<div>');
document.writeln(count(str3, symb)) // 5
document.writeln('</div>');

//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str4 = "Сила тяжести приложена к центру масс тела";
const cutString1 = (str, n) => {
    let cutStr = '';
    let arr = str.split(' ');
    for (let i = 0; i < n; i++) {
        if(i === n) {
            cutStr += arr[i];
        } else {
            cutStr += arr[i] + ' ';
        }
    }
    return cutStr;
}
document.writeln(cutString1(str4, 5)) // 'Сила тяжести приложена к центру'


//-стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books =
    [
        {
            title: 'The Daughters Tale',
            numberOfPages: 324,
            authors: [{name: 'Armando Lucas Correa', age: 44}, {name: 'Jess Kidd', age: 30}],
            genres: ['Fantasy', 'Adventure', 'Romance', 'Contemporary', 'Mystery', 'Horror', 'Thriller']
        },
        {
            title: 'Himself',
            numberOfPages: 225,
            authors: [{name: 'Jess Kidd', age: 30}],
            genres: ['Adventure', 'Romance', 'Contemporary']
        },
        {title: 'Gorgeous Lies', numberOfPages: 123, authors: [{name: 'Martha McPhee', age: 28}, ], genres: ['Fantasy']},
        {
            title: 'All the Missing Girls',
            numberOfPages: 560,
            authors: [{name: 'Megan Miranda', age: 50}],
            genres: ['Mystery', 'Horror',]
        },
        {
            title: 'The Beautiful Bureaucrat',
            numberOfPages: 220,
            authors: [{name: 'Helen Phillips', age: 22}],
            genres: ['Contemporary', 'Mystery', 'Horror', 'Thriller']
        },
        {
            title: 'Love Story',
            numberOfPages: 322,
            authors: [{name: 'Karen Kingsbury', age: 25}, {name: 'Martha McPhee', age: 28}],
            genres: ['Fantasy', 'Adventure', 'Romance', 'Contemporary', 'Mystery', 'Horror',]
        }

    ];
//-знайти наібльшу книжку.
let bigBook = arr =>
let temp = books[0];
for (let j = 1; j < books.length - 1; j++) {
    if(temp.numberOfPages < books[j].numberOfPages) {
        temp = books[j];
    }

}
console.log(temp);
    //- знайти книжку/ки з найбільшою кількістю жанрів
let largGenre = arr =>
temp = books[0];
for (let j = 1; j < books.length - 1; j++) {
    if(temp.genres.length < books[j].genres.length) {
        temp = books[j];
    }


}
console.log(temp);
    //- знайти книжку/ки з найдовшою назвою
let largName = arr =>
temp = books[0];
for (let j = 1; j < books.length - 1; j++) {
    if(temp.title.length < books[j].title.length) {
        temp = books[j];
    }


}
console.log(temp);
    //- знайти книжку/ки які писали 2 автори
let twoAuthors = arr =>
for (let j = 0; j < books.length; j++) {
    if(books[j].authors.length === 2) {
        console.log(books[j]);
    }
}
    //- знайти книжку/ки які писав 1 автор
let oneAuthor = arr =>
for (let j = 0; j < books.length; j++) {
    if(books[j].authors.length === 1) {
        console.log(books[j]);
    }
}
    //- вісортувати книжки по кількості сторінок по зростанню
let sortByPages = arr => arr.sort((a, b) => a.numberOfPages - b.numberOfPages);
console.log(sortByPages(books));


