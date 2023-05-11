

/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, name, surname, email, phone) {

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;


}

let users = [
        new User( 122,'Alex', 'Ivanov', 'era@gmail.com', 0951234561),
        new User( 232,'Petro', 'Sergeev', 'veko@gmail.com', 0661234562),
        new User( 3,'Andrey', 'Pavlov', '123erd@gmail.com', 0501234563),
        new User( 4357,'Marina', 'Petrova', 'serg@gmail.com', 0671234564),
        new User( 52,'Olga', 'Skalkina', 'qwerty@gmail.com', 0681234565),
        new User( 6122,'Marian', 'Sidorov', 'zwer@gmail.com', 0971234566),
        new User( 748,'Valentin', 'Vasilev', 'thief@gmail.com', 0981234567),
        new User( 82,'Jorg', 'Gertsen', 'okten@gmail.com', 0631234568),
        new User( 91,'Armen', 'Saakashvili', 'bekord@gmail.com', 0931234569),
        new User( 101,'Eldar', 'Awetisan', 'vanil@gmail.com', 0941234560),
];
console.log(users);


/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
        let usersEven = users.filter(user => user.id % 2 === 0);
        console.log(usersEven);

/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
        let usersIncrease = users.sort((a, b) => a.id - b.id );
        console.log(usersIncrease);
/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/
class Client extends User {

constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
}

        }

let clients = [
    new Client (122,'Alex', 'Ivanov', 'era@gmail.com', 0951234561, [  'tomato', 'candy', 'carrot', 'beets',
                'oranges', 'apples', 'grapefruit', 'juice', 'chocolate',  'water', 'buckwheat', 'cucumbers']),
    new Client ( 232,'Petro', 'Sergeev', 'veko@gmail.com', 0661234562, [ 'potato', 'tomato', 'candy', 'carrot', 'beets',
                'oranges', 'apples', 'grapefruit', ]),
    new Client ( 3,'Andrey', 'Pavlov', '123erd@gmail.com', 0501234563, [ 'potato', 'tomato', 'candy', 'carrot', 'beets',
                 'beer', 'water', 'buckwheat', 'cucumbers']),
    new Client ( 4357,'Marina', 'Petrova', 'serg@gmail.com', 0671234564, [ 'potato', 'tomato', 'candy', 'carrot', 'beets',
                'oranges', 'apples', 'grapefruit', 'juice', 'chocolate']),
    new Client ( 52,'Olga', 'Skalkina', 'qwerty@gmail.com', 0681234565, [  'buckwheat', 'cucumbers']),
    new Client ( 6122,'Marian', 'Sidorov', 'zwer@gmail.com', 0971234566, [ 'potato', 'tomato', 'candy', 'carrot', 'beets',
                'oranges', 'apples', 'grapefruit', 'juice', 'chocolate', 'cucumbers']),
    new Client ( 748,'Valentin', 'Vasilev', 'thief@gmail.com', 0981234567, [ 'potato', 'beer', 'water', 'buckwheat', 'cucumbers']),
    new Client ( 82,'Jorg', 'Gertsen', 'okten@gmail.com', 0631234568, [ 'potato', 'tomato', 'candy', 'carrot', 'beets',
                'oranges', 'chocolate', 'beer', 'water', 'buckwheat', 'cucumbers']),
    new Client ( 91,'Armen', 'Saakashvili', 'bekord@gmail.com', 0931234569, [ 'potato', 'tomato', 'candy', 'carrot', 'beets',
                'oranges', 'apples', 'grapefruit', 'juice', 'chocolate', 'beer', 'water', 'buckwheat', 'cucumbers']),
    new Client ( 101,'Eldar', 'Awetisan', 'vanil@gmail.com', 0941234560, [ 'grapefruit', 'juice', 'chocolate', 'beer', 'water', 'buckwheat', 'cucumbers'])
];
console.log(clients);

/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/

let clientsSurtByOrder = clients.sort((a, b) => a.order.length - b.order.length);
console.log(clientsSurtByOrder);


/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function Car(model, manufacturer, yearOfManufacture,maximumSpeed, engineVolume) {
    this.model = model
    this.manufacturer = manufacturer;
    this.yearOfManufacture =yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    };
    this.info = function () {
        console.log(this);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maximumSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
    };
    //?????????
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}
let car1 = new Car('Geländewagen', 'Mercedes', 2000, 320, 7,);
    car1.drive();
    car1.info();
    car1.increaseMaxSpeed(400);
    car1.changeYear(2023);
    car1.addDriver({name: 'Alex', surname: 'Petrenko'});
    console.log(car1);



/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

class CarIsClass extends Car {
    constructor(model, manufacturer, yearOfManufacture,maximumSpeed, engineVolume) {
        super(model, manufacturer, yearOfManufacture,maximumSpeed, engineVolume)
    };
    drive() {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    };
    info() {
        console.log(this);
    };
    increaseMaxSpeed(newSpeed) {
        this.maximumSpeed = newSpeed;
    };
    changeYear(newValue) {
        this.yearOfManufacture = newValue;
    };
    //?????????
    addDriver(driver) {
        this.driver = driver;
    };
}
let car3 = new CarIsClass('Camry', 'Toyota', 2021, 360, 4, );
car3.drive();
car3.info();
car3.increaseMaxSpeed(450);
car3.changeYear(2022);
car3.addDriver({name: 'Sergey', surname: 'Vasilenko'
});
console.log(car3);

/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
    class Cinderella {
        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        };
    }

    let cinderellas = [new Cinderella('Cinderellla', 14, 33), new Cinderella('Viktoria', 25, 35), new Cinderella('Marina', 15, 37),
        new Cinderella('Olga', 16, 38), new Cinderella('Tanya', 17, 39), new Cinderella('Angelina', 18, 40), new Cinderella('Veronika', 19, 41),
        new Cinderella('Irina', 20, 42), new Cinderella('Ludmila', 21, 34), new Cinderella('Kristina', 22, 43)
    ];
    console.log(cinderellas);
    class Prince {

        constructor(name, age, shoeSize) {
            this.name = name;
            this.age = age;
            this.shoeSize = shoeSize;
        };
    }
    let prince1 = new Prince('Ludvig', 25, 33);
    console.log(prince1);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince1.shoeSize) {
        console.log(cinderella);
    };
}
let cinderellaFound = cinderellas.find(el => el.footSize === prince1.shoeSize);
console.log(cinderellaFound);