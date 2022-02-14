'use strict';

function showThis(a, b) {
    console.log(this);
    function sum () {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

// showThis(4, 5);

const obj = {
    a: 20,
    b: 10,
    sum: function () {
        function shout() {
            console.log(this);
        }
        shout();
    }
};

// obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`Hello ${this.name}`);
    };
}

let ivann = new User('Ivan', 23);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: "Jonh"
};

// sayName.call(user, 'Petrov');
// sayName.apply(user, ['Sidorov']);

function count(num){
    return this*num;
}

const double = count.bind(2);
// console.log(double(4));

// 1) Обычная функция: this = window, но если есть use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call. apply, bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function (){
//     console.log(this);
//     this.style.backgroundColor = 'Blue';
// });

btn.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = 'Blue';
});

const object = {
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this);
        };
        say();
    }
};

object.sayNumber();

const doublee = a => a * 2;

console.log(doublee(4));