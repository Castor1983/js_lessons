/*- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

{
    id:
        name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
    street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
        lat: '-37.3159',
            lng: '81.1496'
    }
},
    phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
    company: {
    name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
}
}*/
function User(id, name, username, email,street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {

    this.id = id;
    this.name = name;
    this.surname = username;
    this.email = email;
    this.address = {
        street, suite, city, zipcode,
        geo : {
            lat, lng
        }
    };
    this.phone = phone;
    this.website = website;
    this.company = {
        name: companyName, catchPhrase, bs
    };

}

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
'1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
console.log(user);
/*
-  Створити функцію конструктор / клас  який описує об'єкт тегу
Поля :
-назва тегу ()
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результуючого об'єкту
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]

}*/
class Tag {
    constructor(titleOfTag, action, titleOfAttr, actionOfAttr) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [
            {titleOfAttr, actionOfAttr}
        ];
    }
}
let a = new Tag()
let div = new Tag()
let h1 = new Tag()
let span = new Tag()
let input = new Tag()
let form = new Tag()
let option = new Tag()
let select = new Tag()