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


class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return ${this.make} ${this.model};
    }
}

// SportsCar Class (inherits from Car)
class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model); // Inheriting properties from Car
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
