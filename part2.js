// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     isPopular: true,
//     year: 2022,
// }

// console.log(myCar.make + ' ' + myCar.model);
// myCar.model = 'CR-V';
// myCar.mileage = 1000;
// console.log(myCar);

// delete myCar.make;
// console.log(myCar);

// const myCar = {
//     make: 'Honda',
//     'carColor': 'red',
// }
// console.log(myCar['make']);
// console.log(myCar.make);

// const carPopularity = 'popular';

// myCar[carPopularity] = true;
// console.log(myCar);

// const myCar = {
//     make: 'VW',
//     model: 'Golf',
//     info: {
//         color: 'red',
//         mileage: 10000,
//     }
// }

// console.log(myCar['info']['color']);
// delete myCar.info.mileage;
// myCar.info.color = 'Green';

// console.log(myCar);

// const userName = 'Terminator';
// const friendsQty = 100000;

// const userProfile = {
//     // name: userName,
//     // friends: friendsQty,
//     userName,
//     friendsQty,
//     emailVerified: false,
// }

// console.log(userProfile);

// let a = {
//     name: 'Jack',
//     surname: 'Smith',
//     info: {
//         age: 25
//     }
// };
// // let b = Object.assign({}, a);
// // let b = {...a};
// let b = JSON.parse(JSON.stringify(a));

// b.surname = 'Gold';
// a.info.age = 30;
// b.info.age = 45;

// console.log('a', a);
// console.log('b', b);

// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     year: 2022,
//     isPopular: false,
// }

// const myCarJSON = JSON.stringify(myCar);

// console.log(myCar);
// console.log(myCarJSON);

// const jsonData = '{"make":"Honda","model":"Civic","year":2022,"isPopular":false}';
// const newObj = JSON.parse(jsonData);
// console.log(newObj);

// const button = {
//     width: '200px',
//     text: 'Buy',
//     color: 'black',
// }

// const redButton = {
//     ...button,
//     color: 'red',
// }

// console.log(redButton);

// const {color, text} = redButton;
// // const color = redButton.color;
// // const text = redButton.text;

// console.log(color, text);

// const numbers = [1, 2, 3, 4, 5];
// console.log(Array.isArray(numbers));
// const random = new Array(1, 2, 3, 4);
// console.log(numbers.length);
// console.log(numbers[3]);

// const a = [];
// const b = [];

// console.log(Boolean({}));
// numbers.length = 3;
// console.log(numbers);
// numbers[1] = 777;
// numbers[10] = 888;
// console.log(numbers[999]);

// const mixedArray = [
//   1,
//   true,
//   "hello",
//   [1, 2, [3, 4, 5], 6],
//   { name: "Jack", surname: "Smith", info: ["brown hair", "green eyes"] },
// ];

// console.log(mixedArray[3][2][1]);
// console.log(mixedArray[4]['info'][0]);

// const numbers = [1, 2, 3, 4, 5];


// console.log(numbers[2]);
// numbers.push(6);
// console.log(numbers[2]);
// numbers.unshift(0);
// console.log(numbers[2]);

// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);



const numbers = [1, 2, 3, 4, 5];
const squares = [];

let sum = 0;

numbers.forEach(num => {
    // sum += num;
    // console.log(num ** 2);
    squares.push(num ** 2);
    // console.log(squares);
});

console.log(squares);
