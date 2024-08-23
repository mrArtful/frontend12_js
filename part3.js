// let x = 0;

// x && console.log(x ** 2);
// x || console.log('There is no X');

// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     mileage: 4000,
// }

// if (myCar.mileage >= 0) {
//     if (myCar.mileage === 0) {
//         console.log('This car is new.');
//     } else if (myCar.mileage < 5000) {
//         console.log('This car is almost new.');
//     } else if (myCar.mileage >= 5000) {
//         console.log('This car is old.')
//     }
// } else {
//     console.log('Mileage is negative. Go to service.');
// }

// if (myCar.mileage === 0) {
//     console.log('This car is new.');
// }
// if (myCar.mileage < 5000 && myCar.mileage > 0) {
//     console.log('This car is almost new.');
// }
// if (myCar.mileage < 10000 && myCar.mileage >= 5000) {
//     console.log('This car is old.')
// }

// let x = 123123, y = 763527;

// let res = x * y;
// if (res % 2 === 0) {
//     console.log(res, 'is even');
// } else {
//     console.log(res, 'is odd');
// }

// console.log((res % 2 === 0 && 'is even') || (res % 2 === 1) && 'is odd');

const isikukood = '38803160272';

// if (isikukood.length === 11) {
//     console.log(isikukood);
// } else if (isikukood.length < 11) {
//     console.log('code is too short');
// } else if (isikukood.length > 11) {
//     console.log('code is too long');
// }

// if (isikukood.length === 11) {
//     console.log(isikukood);
// } else {
//     if (isikukood.length < 11) {
//         console.log('code is too short');
//     } else {
//         console.log('code is too long');
//     }
// }

// let username = null;

// if (!username) {
//     console.log('There is no username');
// }

// console.log(8 === '8');

// let name = 'Jack';
// let surname = 'Smith';
// let age = 20;

// console.log('Hello ' + name + ' ' + surname + '. You are ' + age + ' years old!');
// console.log(`Hello ${name} ${surname}. You are ${age} years old!`);

// let user = 'simon';

// console.log(user[0].toUpperCase() + user.slice(1).toLowerCase());
// console.log(`${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`);

// let x = 2, y = 5;
// console.log(x + y);

// x = 3, y = 3;
// console.log(x + y);

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(23, 12);
// sum(43, 23);
// sum(123, 98);


// function sayHello() {
//     console.log("Hello wolrd!");
//     return 'I said hello world!'
// }

// console.log(sayHello());

// function area(a, b) {
//     console.log(a * b);
// }

// let x = area(2, 4);
// console.log(x);

// function sayHello(name) {
//     return `Hello ${name}`
//     console.log(name);
// }

// console.log(sayHello('Jack'));

// function positiveOrNegative(number) {
//     if (number > 0) {
//         return 'positive';
//     } else if (number < 0) {
//         return 'negative';
//     }
//     return 'zero';
// }

// console.log(`This number is ${positiveOrNegative(0)}`)

// function triangleArea(a, b, c) {
//     const halfPerimiter = (a + b + c) / 2;
//     const area = (halfPerimiter * (halfPerimiter - a) * (halfPerimiter - b) * (halfPerimiter - c)) ** 0.5;
//     return area;
// }

// console.log(triangleArea(3, 4, 5));

// const myCar = {
//     make: 'Honda',
//     mileage: 0,
//     drive: function () {
//         this.mileage += 100;
//     },
// }

// const myOtherCar = {
//     mileage: 1000,
// }

// myCar.drive()
// console.log(myCar);

// const sayHello = function (name) {
//     console.log(`Hello ${name}`);
// }
// sayHello('Jack')



// function driveCar(car) {
//     car.mileage += 100;
// }

// driveCar(myCar);
// driveCar(myCar);
// driveCar(myCar);
// driveCar(myCar);
// driveCar(myCar);
// driveCar(myCar);
// driveCar(myCar);
// console.log(myCar);


// function sayHello() {
//     console.log('Hello world!');
// }

// console.log(sayHello);

// sayHello = 1000;
// console.log(sayHello);

// function wrapper(func) {
//     console.log('START');
//     func();
//     console.log('FINISH');
// }

// function sayHello() {
//     console.log('HELLO');
// }

// wrapper(sayHello);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = numbers.map(function (num) {
    return {
        num: num,
        square: num ** 2,
    }
})

console.log(newArr);


numbers.forEach(function (num) {
    
})