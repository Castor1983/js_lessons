//1. Створити пустий масив та :
const newVar = [];
//    a. заповнити його 50 парними числами за допомоги циклу.
console.log('1a*******************')
for (let i = 0; i < 100; i ++) {
    if (i % 2 === 0)
    newVar[newVar.length] = i;

}
console.log(newVar);

console.log('1b*******************')
//    b. заповнити його 50 непарними числами за допомоги циклу.
const newVar1 = [];
for (let i = 0; i < 100; i ++) {
    if (i % 2 !== 0)
        newVar1[newVar1.length] = i;

}
console.log(newVar1);

console.log('1c*******************')
//    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
const newVar2 = [];
for (let i = 0; i < 20; i ++) {
    newVar2[newVar2.length] = Math.random();

}
console.log(newVar2);

console.log('1d*******************')
//    d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
const newVar3 = [];
for (let i = 0; i < 20; i ++) {
    newVar3[newVar3.length] = Math.floor(Math.random() * 732) + 8 ;

}
console.log(newVar3);

console.log('2*******************')
//2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < newVar3.length; i += 3) {
    console.log(newVar3[i]);

}
console.log('3*******************')
//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < newVar3.length; i += 3) {
    if(newVar3[i] % 2 === 0)
    console.log(newVar3[i]);
}

console.log('4*******************')
//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
const newVar4 = [];
for (let i = 2; i < newVar3.length; i += 3) {
    if(newVar3[i] % 2 === 0)
        console.log(newVar3[i]);
    newVar4[newVar4.length] = newVar3[i]
}
console.log(newVar4);


console.log('5*******************')
//5. Вивести кожен елемент масиву, сусід справа якого є парним
//EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < newVar3.length; i++) {
    if (newVar3[i+1] % 2 === 0) {
        console.log(newVar3[i]);
    }

}


console.log('6*******************')
//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

const newVar5 = [100,250,50,168,120,345,188];
let check = 0;
for (const number of newVar5) {
    check += number;
}
check = check / (newVar5.length);
console.log(check);

console.log('7*******************')
//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
const newVar6 = [];
for (let i = 0; i < 15; i++) {
    newVar6[newVar6.length] = (Math.floor(Math.random() * 700  )) * 5 ;

}
console.log(newVar6);

console.log('8*******************')
//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
const newVar7 = ['Okten', 'school', 1, 2, 3, 'Okten', true, 2, 17, 13, 6, 22, 31, 45, 66, 100,'is', 'very', 'cool'];
const newVar8 = [];
for (let i = 0; i < newVar7.length; i++) {
     if (typeof newVar7[i] === 'number') {
         newVar8[newVar8.length] = newVar7[i];
     }
}
console.log(newVar8);

console.log('9*******************')
//- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    /*Записати цей об'єкт в новий масив
Example:
    let usersWithCities = [
            {
                id: 1, // <===
                name: 'vasya',
                age: 31,
                status: false,
                address: {
                    user_id: 1, // <===
                    country: 'Ukraine',
                    city: 'Ternopil'
                }
            },
            // TO BE CONTINUED .....
        ]
*/
const usersWithCities = [];
for (let j = 0; j < usersWithId.length; j++) {
    for (let k = 0; k < citiesWithId.length; k++) {
      if (usersWithId[j].id === citiesWithId[k].user_id ) {
          usersWithId[j].adress = citiesWithId[k];
          usersWithCities[usersWithCities.length] = usersWithId[j];
      }
    }

}
console.log(usersWithCities);

console.log('10a*******************')
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
const numbers1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (const number of numbers1) {
    if(number % 2 === 0) {
        console.log(number);
    }
}

console.log('10b*******************')
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
const numbers2 = [];
for (const number of numbers1) {
    numbers2[numbers2.length] = number;
}
console.log(numbers2);


console.log('11a*******************')
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
    const letters = [ 'a', 'b', 'c'];
let string = '';
for (let j = 0; j < letters.length; j++) {
    string += letters[j];

}
console.log(string);

console.log('11b*******************')
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let string1 = '';
let i = 0
while (i < letters.length) {
    string1 += letters[i];
    i++;
}
console.log(string1);
console.log('11c*******************')
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let string2 = '';
for (const letter of letters) {
    string2 += letter;
}
console.log(string2);