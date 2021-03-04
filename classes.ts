//Classes => a blueprint to create an object with some fields (values) and methods (functions)
//to represent a 'thing

class Vehicle {
  //   color: string = "red";
  //   color: string;

  //You can initialize the property on the same line or on the constructor, one or the other.
  constructor(public color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

//Basic Inheritance
//You can override diferent methods
class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    // super is a reference to the constructor method in the parent
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }
  //This method can safely call the private drive method since there in the same class
  startDrivingProcesss(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");

car.startDrivingProcesss();

//Modifiers keywords we can place on differnt methods and propertiesinside a class.
//Restrict access to differnt functions or different variables. BY default, will be public.

//Public: This method can be called any where, any time.

//Private: This method can only be called by other methods in this class

//Protected: This method can be called by other methods in this class, or by other methods in
//child classes.
