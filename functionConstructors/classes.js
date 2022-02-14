'use strict';


//Абстракция: концепция отделяется от эземпляров
class Rectangle {//концепция
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);//экземпляр
const long = new Rectangle(10, 5);
console.log(square.calcArea());
console.log(long.calcArea());

//Наследование
class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, color) {
        super(height, width);
        this.text = text;
        this.color = color;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.color}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

div.showMyProps();
console.log(div.calcArea());
