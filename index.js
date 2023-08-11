const myObject = {
    firstname: 'John',
    lastname: 'Smith',
    hobbies: ['sleeping', 'eating', 'coding'],
    beverages: {
        morning: "coffee",
        afternoon: "Iced Tea"
    },
    action: function () {
        return `Time for ${this.beverages.afternoon} and 
        ${this.beverages.morning}`;
    }
};

    myObject.middleName = 'Moses';

console.log(myObject);




    myObject.firstname = 'Jane';
    console.log(myObject);
//     myObject.fullname = myObject.firstname + ' ' + myObject.lastname

// console.log(myObject.action());

const vehicle = {
    wheels: 4,
    engine: function ()  {
        return 'Vrooommm'
    }
};

console.log(vehicle.engine());
// const cars = Object.create(vehicle);
// cars.doors = 4;
// cars.engine = function () {
//     return 'whoooooshh'
// };

// console.log(cars.engine());


const John = {
    name: 'John',
    weight: 50,
    hobbies : ['sleeping', 'eating', 'coding'],
    colour: 'melanin',
    age: 30,
    job: true,
    fullname: function () {
        return `His name is ${this.name} and his weight is ${this.weight}`
        
        
    }
}
console.log(John.fullname());


// function number(a, b) {
//     return a + b;

// }

// console.log(5 * 10);