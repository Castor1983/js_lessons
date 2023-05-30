
/*- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
    зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".*/
let htmlDivElement1 = document.createElement('div');
htmlDivElement1.setAttribute('id', 'text')
htmlDivElement1.innerText = 'Okten school';
let htmlButtonElement = document.createElement('button');
htmlButtonElement.setAttribute('id', 'btn');
htmlButtonElement.innerText = 'Button';
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
htmlButtonElement1.innerText = 'Кнопка';
htmlFormElement.append(htmlInputElement, htmlButtonElement1);
htmlDivElement2.appendChild(htmlFormElement);
document.body.appendChild(htmlDivElement2);
document.getElementById('bt').onclick = function () {
    htmlFormElement.onsubmit = function (ev) {
        //ev.preventDefault();
        let age = Number(this.age.value);
        if (age > 18) {
            console.log('Вам більше 18 років');
        } else {
            console.log('Вам менше 18 років');
        }

    }
};
