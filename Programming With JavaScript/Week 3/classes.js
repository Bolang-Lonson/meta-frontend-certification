class Car {
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }

    turboOn(){
        console.log('turbo is on!');
    }
}

var car1 = new Car('red', 180);
car1.turboOn();

var car2 = Object.create(Car);  // creating instance with the Object.create() mthd since all classes are subclasses of the Object class.