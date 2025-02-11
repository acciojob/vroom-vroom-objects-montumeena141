// Complete the js code
// function Car(make, model{
// 	this.make=make;
//     this.model=model;
// }

// function SportsCar(make, model, topSpeed){
// 	Car.call(this,make,model);
// 	this.topspeed=topspeed;
// }

// // class Car{
// //  constructor(make,model){
// //     this.make=make;
// //     this.model=model;
// // }

// //     // getMakeModel(){
// //     //     return `${this.make}  ${this.model}`;
// //     // }
// //  }
//  Car.prototype.getMakeModel= function(){
//     return `${this.make}  ${this.model}`;
//  }

// // class SportCar extends Car{
// //    constructor(make,model,topspeed){
// //     super(make,model);
// //     this.topspeed=topspeed;
// //    }
// // //    getTopSpeed(){
// // //     return `${this.topspeed}`;
// // //    }
// // }

// SportsCar.prototype.getMakeModel= function(){
//     return this.topspeed;
//  }

// SportsCar.prototype=Object.create(Car.prototype);

function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return ${this.make} ${this.model};
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call Car constructor
    this.topSpeed = topSpeed;
}

// Set up inheritance before defining methods
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return ${this.make} ${this.model};
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call Car constructor
    this.topSpeed = topSpeed;
}

// Set up inheritance before defining methods
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;




