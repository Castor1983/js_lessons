//-створити масив з:
//- з 5 числових значень

const numbers = [1, 2, 3, 4, 5];

//- з 5 стічкових значень

const strings = ['Okten', 'school', 'is', 'very', 'cool'];

//- з 5 значень стрічкового, числового та булевого типу

const newArr = [1, 2, 3, 'Okten', true];

// - та вивести його в консоль
console.log(newArr);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const newArr1 = [];
newArr1[0] = 1;
newArr1[1] = 'Okten';
newArr1[2] = true;
newArr1[3] = 'Alex';
newArr1[4] = 2444;
console.log(newArr1);

console.log('1******************************');

//- є масив [2,17,13,6,22,31,45,66,100,-18] :
//1. перебрати його циклом while

const numbers1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < numbers1.length) {
    console.log(numbers1[i]);
    i++;
}
console.log('2******************************');

//2. перебрати його циклом for
for (let j = 0; j < numbers1.length; j++) {
    console.log(numbers1[j]);

}
console.log('3******************************');

//3. перебрати циклом while та вивести  числа тільки з непарним індексом

let k = 1;
while (k < numbers1.length) {
    console.log(numbers1[k]);
    k += 2;
}
console.log('4******************************');

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 1; j < numbers1.length; j += 2) {
    console.log(numbers1[j]);
}
console.log('5******************************');

//5. перебрати циклом while та вивести  числа тільки парні  значення
let l = 0;
while (l < numbers1.length) {
    if (numbers1[l] % 2 === 0) {
        console.log(numbers1[l]);
    }
    l++;
}
console.log('6******************************');

//6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < numbers1.length; j++) {
    if (numbers1[j] % 2 === 0) {
        console.log(numbers1[j]);
    }
}

console.log('7******************************');

//7. замінити кожне число кратне 3 на слово "okten"

for (let j = 0; j < numbers1.length; j++) {
    if (numbers1[j] % 3 === 0) {
        numbers1[j] = 'Okten';
        console.log(numbers1[j]);
    }
}
console.log('8******************************');

//8. вивести масив в зворотньому порядку.
for (let j = numbers1.length - 1; j >= 0; j--) {
    console.log(numbers1[j]);
}
console.log('9.1******************************');

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//1
const numbers2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let m = numbers2.length - 1;
while (m >= 0) {
    console.log(numbers2[m]);
    m--;
}
console.log('9.2******************************');
//2
for (let j = numbers2.length - 1; j >= 0; j--) {
    console.log(numbers2[j]);
}
console.log('9.3******************************');
//3
let n = numbers2.length - 2;
while (n >= 0) {
    console.log(numbers2[n]);
    n -= 2;
}
console.log('9.4******************************');
//4
for (let j = numbers2.length - 2; j >= 0; j -= 2) {
    console.log(numbers2[j]);
}
console.log('9.5******************************');
//5
let o = numbers2.length - 1;
while (o >= 0) {
    if (numbers2[o] % 2 === 0) {
        console.log(numbers2[o]);

    }
    o--;
}
console.log('9.6******************************');
//6
for (let j = numbers2.length - 1; j >= 0; j--) {
    if (numbers2[j] % 2 === 0) {
        console.log(numbers2[j]);
    }
}
console.log('9.7******************************');
//7
for (let j = numbers2.length - 1; j >= 0; j--) {
    if (numbers2[j] % 3 === 0) {
        numbers2[j] = 'Okten';
        console.log(numbers2[j]);
    }
}
console.log('10.1******************************');

//    - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let j = 0; j < numbers3.length; j++) {
    console.log(numbers3[j]);

}
console.log('10.2******************************');
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const strings2 = ['Alex', 'Max', '123', 'Okten', 'school', 'mother', 'March', 'main', 'menu', 'excellent'];
for (let j = 0; j < strings2.length; j++) {
    console.log(strings2[j]);

}

console.log('10.3******************************');
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const newArr2 = [1, 2, 3, 4, 5, 'Okten', 'school', 'mother', 'March', 'main'];
for (let j = 0; j < newArr2.length; j++) {
    console.log(newArr2[j]);

}
console.log('10.4******************************');
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
const newArr3 = [1, true, 4, 5, 'Okten', 'school', true, 'mother', 'March', false,];
for (let j = 0; j < newArr3.length; j++) {
    if (typeof newArr3[j] === 'boolean')
        console.log(newArr3[j]);
}
console.log('10.5******************************');
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let j = 0; j < newArr3.length; j++) {
    if (typeof newArr3[j] === 'number')
        console.log(newArr3[j]);
}
console.log('10.6******************************');
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let j = 0; j < newArr3.length; j++) {
    if (typeof newArr3[j] === 'string')
        console.log(newArr3[j]);
}
console.log('11.1******************************');
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
const newArr4 = [];
newArr4[0] = 1;
newArr4[1] = 'Okten';
newArr4[2] = true;
newArr4[3] = 'Alex';
newArr4[4] = 2444;
newArr4[5] = 'school';
newArr4[6] = false;
newArr4[7] = 'Kharkiv';
newArr4[8] = 234;
newArr4[9] = 'number';
for (let p = 0; p < newArr4.length; p++) {
    console.log(newArr4[p]);
}

console.log('11.2******************************');
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
}

console.log('11.3******************************');
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
}
console.log('11.4******************************');
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}
console.log('11.5******************************');
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}
console.log('11.6   ******************************');
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}


//стоврити масив книжок (назва, кількість сторінок, автори , жанри).
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

console.log('12.1******************************');
//-знайти наібльшу книжку.

let temp = books[0];
for (let j = 1; j < books.length - 1; j++) {
    if(temp.numberOfPages < books[j].numberOfPages) {
        temp = books[j];
    }

}
console.log(temp);

console.log('12.2******************************');
//- знайти книжку/ки з найбільшою кількістю жанрів
temp = books[0];
for (let j = 1; j < books.length - 1; j++) {
    if(temp.genres.length < books[j].genres.length) {
        temp = books[j];
    }


}
console.log(temp);

console.log('12.3******************************');
//- знайти книжку/ки з найдовшою назвою
temp = books[0];
for (let j = 1; j < books.length - 1; j++) {
    if(temp.title.length < books[j].title.length) {
        temp = books[j];
    }


}
console.log(temp);

console.log('12.4******************************');
//- знайти книжку/ки які писали 2 автори
for (let j = 0; j < books.length; j++) {
    if(books[j].authors.length === 2) {
        console.log(books[j]);
    }
}

console.log('12.5******************************');
//- знайти книжку/ки які писав 1 автор

for (let j = 0; j < books.length; j++) {
    if(books[j].authors.length === 1) {
        console.log(books[j]);
    }
}