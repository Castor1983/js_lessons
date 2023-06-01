/*Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
==========================*/
let form1 = document.createElement('form');
form1.setAttribute('name', 'form1');
let nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'firstname');
let surnameInput = document.createElement('input');
surnameInput.setAttribute('type', 'text');
surnameInput.setAttribute('name', 'surname');
let ageInput = document.createElement('input');
ageInput.setAttribute('type', 'number');
ageInput.setAttribute('name', 'age');
let button = document.createElement('button');
button.innerText = 'send object';

form1.append(nameInput, surnameInput, ageInput, button);
document.body.appendChild(form1);
//раскомментировать вместе HTML разметкой блок form1 в файле hw10.html
//let form1 = document.forms.form1;
 form1.onsubmit = function (e) {
     e.preventDefault();
     let obj = {
         firstname: this.firstname.value,
         surname: this.surname.value,
         age: this.age.value
     }
     let div1 = document.createElement('div');
     div1.innerText =  JSON.stringify(obj);
     document.body.appendChild(div1);
 };
    /*є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
    ==========================*/

let box = document.body.getElementsByClassName('number')[0];
window.addEventListener('load', function(e) {
    let item = localStorage.getItem('count') || box.innerText;
    box.innerText = +item + 1;
    localStorage.setItem('count', box.innerText);
});

/*Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
зберігається інформація про дату та час відвідування сторінки.
  Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
  відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
  =========================*/
window.addEventListener('load', function () {
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push(new Date());
    localStorage.setItem('sessions', JSON.stringify(sessions));
});


    /*зробити масив на 100 об'єктів та дві кнопки prev next
    при завантажені сторінки з'являються перші 10 об'єктів.
    При натисканні next виводяться настпні 10 об'єктів
    При натисканні prev виводяться попередні 10 об'єктів*/

let arr100obj = []
for (let i = 1; i < 101; i++) {
    let obj = {product: `product ${i}`, price: `price ${i}`};
    arr100obj.push(obj);

}

let pagProduct = document.getElementById('pagProduct');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let j = 10;

for (let i = j - 10; i < j; i++) {
    let item = document.createElement('div');
    item.classList.add('product');
    item.innerText = `title: ${arr100obj[i].product}, price: ${arr100obj[i].price}`;
    pagProduct.appendChild(item);
    prev.style.visibility = 'hidden';
}
next.onclick = function () {
    j += 10;
    pagProduct.innerText = '';
    for (let i = j - 10; i < j; i++) {
        let item = document.createElement('div');
        item.classList.add('product');
        item.innerText = `title: ${arr100obj[i].product}, price: ${arr100obj[i].price}`;
        pagProduct.appendChild(item);
        if (j === 100) {
            next.style.visibility = 'hidden';
        }
        if (j > 10) {
            prev.style.visibility = 'unset';
        }
    }
}
prev.onclick = function () {
    j -= 10;
    pagProduct.innerHTML = '';
    for (let i = j - 10; i < j; i++) {
        let item = document.createElement('div');
        item.classList.add('product');
        item.innerText = `product: ${arr100obj[i].product}, price: ${arr100obj[i].price}`;
        pagProduct.appendChild(item);
        if (j === 10) {
            prev.style.visibility = 'hidden';
        }
        if (j < 100) {
            next.style.visibility = 'unset';
        }
    }
}
    /*- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
        зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".*/
    let htmlDivElement1 = document.createElement('div');
    htmlDivElement1.setAttribute('id', 'text')
    htmlDivElement1.innerText = 'Okten school';
    let htmlButtonElement = document.createElement('button');
    htmlButtonElement.setAttribute('id', 'btn');
    htmlButtonElement.innerText = 'Eraser';
    document.body.append(htmlDivElement1, htmlButtonElement);
    document.getElementById('btn').onclick = () => htmlDivElement1.remove();


    /*- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
        При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
    та повідомити про це користувача
    */
    let htmlDivElement2 = document.createElement('div');
    let htmlFormElement = document.createElement('form');
    let htmlInputElement = document.createElement('input');
    htmlInputElement.setAttribute('name', 'age');
    let htmlButtonElement1 = document.createElement('button');
    htmlButtonElement1.setAttribute('id', 'bt');
    htmlButtonElement1.innerText = 'Возраст';
    htmlFormElement.append(htmlInputElement, htmlButtonElement1);
    htmlDivElement2.appendChild(htmlFormElement);
    document.body.appendChild(htmlDivElement2);
    document.getElementById('bt').onclick = function () {
        htmlFormElement.onsubmit = function (e) {
            e.preventDefault();
            let age = Number(this.age.value);
            if (age > 18) {
                console.log('Вам більше 18 років');
            } else if (age < 18) {
                console.log('Вам менше 18 років');
            } else {
                console.log('Вам  18 років');
            }

        }
    };

/* Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)*/


/*
(подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
при перезавантаженні сторінки до значаення додається по 10грн, але !!!
    зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
    При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається*/
