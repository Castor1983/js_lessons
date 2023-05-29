/*
    - створити блок,
    - додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.
*/
let htmlDivElement = document.createElement('div');
htmlDivElement.classList.add('wrap');
htmlDivElement.classList.add('collapse');
htmlDivElement.classList.add('alpha');
htmlDivElement.classList.add('beta');
htmlDivElement.innerText = 'Okten is cool!';
htmlDivElement.style.background = 'pink';
htmlDivElement.style.color = 'white';
htmlDivElement.style.fontSize = 'xxx-large';
document.body.appendChild(htmlDivElement);
let cloneDivElement = htmlDivElement.cloneNode(true);
document.body.appendChild(cloneDivElement);


//- Є масив:
let menu = ['Main', 'Products', 'About us', 'Contacts']
//Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let htmluListElement = document.createElement('ul');
for (const Element of menu) {
    let li = document.createElement('li');
    htmluListElement.appendChild(li);
    li.innerText = Element;
}
document.body.appendChild(htmluListElement);


//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
/*Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.
=========================*/
for (const element of coursesAndDurationArray) {
    let ulElement = document.createElement('ul');
    for (const elementKey in element) {
        let li = document.createElement('li');
        ulElement.appendChild(li);
        li.innerText = `${elementKey} - ${element[elementKey]}`;
    }
    document.body.appendChild(ulElement);
}


//   - Є масив
/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
*/

/*За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
        з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.

==========================*/
for (const element of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    let hOneElement = document.createElement('h1');
    let pElement = document.createElement('p');
    divElement.classList.add('item');
    hOneElement.classList.add('heading');
    pElement.classList.add('description');
    divElement.append(hOneElement, pElement);
    hOneElement.innerText = `title: ${element.title}`;
    pElement.innerText = `monthDuration: ${element.monthDuration}`;
    document.body.appendChild(divElement);
}

/*- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
    Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

=========================*/
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpson of simpsons) {
    let divElement = document.createElement('div');
    let olElement = document.createElement('ol');
    divElement.appendChild(olElement);
    divElement.classList.add('member');
    for (const info in simpson) {
         let liElement = document.createElement('li');
         olElement.appendChild(liElement);
        liElement.innerText += `${info} - ${simpson[info]} `;

    }

    document.body.appendChild(divElement);
}

/* Цикл в циклі
- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
 значення окремих властивостей, для властивості modules зробити список з елементами
Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
------------------*/
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const element of coursesArray) {
    let divElement = document.createElement('div');
    divElement.classList.add('courses');
    for (const elementKey in element) {
        let divElementKey = document.createElement('div');
        divElement.appendChild(divElementKey);
        if(Array.isArray(element[elementKey])) {
            divElementKey.innerText = `${elementKey} :`
            let olElementKey = document.createElement('ol');
            divElement.appendChild(olElementKey);
            for (const elementKeyElement of element[elementKey]) {
                let liElementKey = document.createElement('li');
                olElementKey.appendChild(liElementKey);
                liElementKey.innerText = elementKeyElement;
            }
        } else {
            divElementKey.innerText = `${elementKey} : ${element[elementKey]}`;
        }
    }
    document.body.appendChild(divElement);
}

/*- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
    зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".*/
let htmlDivElement1 = document.createElement('div');
htmlDivElement1.setAttribute('id', 'text')
htmlDivElement1.innerText = 'Okten school';
let htmlButtonElement = document.createElement('button');
htmlButtonElement.setAttribute('id', 'btn');
htmlButtonElement.innerText = 'Button';
document.body.append(htmlDivElement1, htmlButtonElement);
document.getElementById('btn').onclick = () =>  htmlDivElement1.remove();


/*- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
    При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
та повідомити про це користувача
*/
