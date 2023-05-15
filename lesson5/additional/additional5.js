//Всі функції повинні бути описані стрілочним типом!!!!
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('1+++++++++++++++++++++++++++')

let minNumber = (num, num1, num2) => {
    let min = num;
        if (min > num1) {
            min = num1;
    }
        if (min > num2) {
            min = num2;
        }
    return min;
}
console.log(minNumber(14, 25, -1));

console.log('2+++++++++++++++++++++++++++')
//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumber = (num, num1, num2) => {
    let max = num;
    if (max < num1) {
        max = num1;
    }
    if (max < num2) {
        max = num2;
    }
    return max ;
}
console.log(maxNumber(14, 25, -1));

console.log('3+++++++++++++++++++++++++++')
//- створити функцію яка повертає найбільше число з масиву
let minNumberOfArr = arr => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minNumberOfArr([4, 2, 3, 5, -1, 8, -10, 4, 1]));


console.log('4+++++++++++++++++++++++++++')
//- створити функцію яка повертає найменьше число з масиву
let maxNumberOfArr = arr => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNumberOfArr([4, 2, 3, 5, -1, 8, -10, 4, 1]));


console.log('5+++++++++++++++++++++++++++')
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumNumber = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumNumber([4, 2, 3, 5, -1, 8, -10, 4, 1]));


console.log('6+++++++++++++++++++++++++++')
//- Дано натуральное число n. Выведите все числа от 1 до n.
const naturalisCounter = n => {
    for (let i = 1; i <= n; i++) {
        let nElement = i;
        console.log(nElement);
    }
}
naturalisCounter(10);

console.log('7+++++++++++++++++++++++++++')
//- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.
const twoNumber = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            let aElement = i;
            console.log(aElement);
        }
    } else {
        for (let i = a; i >= b; i--) {
            const aElement = i;
            console.log(aElement);
        }
    }
}
twoNumber(20, 10);

console.log('8+++++++++++++++++++++++++++')
/*-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]*/

let foo = (arr, i) => {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i +1] = temp;
    return arr;
}
console.log(foo([4, 2, 3, 5, -1, 8, -10, 4, 1], 3,));

console.log('9+++++++++++++++++++++++++++')
/*
- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
EXAMPLE:
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]
*/
const sortArr = arr => {
    let count = 0;
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        } else {
            newArr[newArr.length] = arr[i];
        }
    }
    for (let i = 0; i < count; i++) {
        newArr[newArr.length] = 0;
    }

    console.log(newArr);
}
sortArr([1, 0, 1, 2, 0, 3]);
