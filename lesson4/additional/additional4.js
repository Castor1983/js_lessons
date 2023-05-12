//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('1++++++++++++++++++');
let minNumber = function (...number) {
    let temp = number[0];
    for (let i = 0; i < number.length; i++) {
        if (temp > number[i]) {
            temp = number[i];
        }
    }
    return temp;
}
console.log(minNumber(1, -4, 3, -100));

console.log('2++++++++++++++++++');
//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumber = function (...number) {
    let temp = number[0];
    for (let i = 0; i < number.length; i++) {
        if (temp < number[i]) {
            temp = number[i];
        }
    }
    return temp;
}
console.log(maxNumber(1, -4, 3, -100));

//- створити функцію яка повертає найбільше число з масиву
console.log('3++++++++++++++++++');
let maxArrNumber = function (arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (temp < arr[i]) {
            temp = arr[i];
        }
    }
    return temp;
}
console.log(maxArrNumber([4, 2, 3, 5, -1, 8, -10, 4, 1]));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log('4++++++++++++++++++');
let average = function (arr) {

    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i];
    }
    temp = temp / arr.length;
    return temp;
}
console.log(average([4, 2, 3, 5, 16, 8, 12, 4, 1, 11]));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log('5++++++++++++++++++');
let minMaxNumber = function (...number) {
    let min = number[0];
    let max = min;
    for (let i = 0; i < number.length; i++) {
        if (min > number[i]) {
            min = number[i];
        }
        if (max < number[i]) {
            max = number[i];
        }
    }
    console.log(max);
    return min;
}
minMaxNumber(1, -4, 3, -100);

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
console.log('6++++++++++++++++++');
const randomNumber = function () {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr[arr.length] = Math.round(Math.random() * 100);
    }
    console.log(arr) ;
};
randomNumber();

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
console.log('7++++++++++++++++++');
const randomNumberLimit = function (limit) {
    let arr = [];
    for (let i = 0; i < limit; i++) {
        arr[arr.length] = Math.round(Math.random() * limit);
    }
    console.log(arr) ;
};
randomNumberLimit(5);

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log('8++++++++++++++++++');
const reverse = function (arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i];

    }
    console.log(newArr);
}
reverse([1, 3, 5, 88, 34, 24]);

//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
console.log('9++++++++++++++++++');
const func = function (...elements) {
    if (elements.length === 1) {
        let oneElement = elements[0];
        console.log(oneElement);
    } else {
        let result = elements[0] + elements[1];
        console.log(result);
    }
}
func(4, 'Okten');

/*- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
[1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]*/
console.log('10++++++++++++++++++');
const sumArrs = function (arr, arr1) {
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        arr3[arr3.length] = arr[i] + arr1[i];

    }
    console.log(arr3);
}
sumArrs([1, 2, 3, 4,], [5, 6, 7, 8]);

/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]*/
console.log('11++++++++++++++++++');
const retrnArrKeys = function (arr) {
   const arrKeys = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            arrKeys[arrKeys.length] = arrElementKey;
        }
    }
    console.log(arrKeys);
}
retrnArrKeys([{name: 'Dima', age: 13}, {model: 'Camry'}])

 /*   - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/
console.log('12++++++++++++++++++');

const retrnArrField = function (arr) {
    const arrField = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            arrField[arrField.length] = arrElement[arrElementKey];
        }
    }
    console.log(arrField);
}
retrnArrField([{name: 'Dima', age: 13}, {model: 'Camry'}])

