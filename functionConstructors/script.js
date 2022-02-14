'use strict';

// const num = new Number(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(){
    console.log(`User ${this.name} exit`);
};

const ivan = new User('Ivan', 23);
const alex = new User('Alex', 14);

// ivan.exit();

// console.log(ivan);
// console.log(alex);
// ivan.hello();
// alex.hello();