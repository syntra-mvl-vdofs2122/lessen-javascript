// OBJECTS

// declaration

let anObject = {};
let otherObject = new Object();

let newKey = 'cool';

let user = {
    firstName: 'Korneel',
    lastName: 'Eeckhout',
    age: 30,
    fullName() {
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    },
    // fullName: function () {
    //     return this.firstName + ' ' + this.lastName;
    // },
    'full name': 'test',
    0: 'null',
    [newKey]: true,
};

// __proto__

user.fullName();

console.log(user.firstName);
console.log(user['lastName']);
console.log(user['full name']);
console.log(user[0]);
console.log(user['0']);

let key = 'age';

console.log(user[key]);

// console.log(firstName);
// console.log(user.firstName);

console.log(user.test);

console.log(user);

user.firstName = undefined;

console.log('firstName' in user);

delete user.firstName;

console.log('firstName' in user);

console.log(user);

let brand = 'Toyota';
let price = 30000;

let car = {
    brand, // === brand: brand,
    price,
};

let carKeys = Object.keys(car);

console.log(car);

// keys() / values()

console.log(Object.keys(car));
console.log(Object.values(car));

for (let i = 0; i < carKeys.length; i++) {
    console.log('Key: ' + carKeys[i]);
    console.log('Val: ' + car[carKeys[i]]);
}

// for ... in loop

for (let key in car) {
    console.log('Key: ' + key);
    console.log('Val: ' + car[key]);
}
