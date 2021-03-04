// Interfaces
// Creates a new type, describing the property names and value types of an object.

interface Reportable {
//   name: string;
//   year: Date;
//   broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary() : string {
      return `Name: ${this.name}`;
  }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}
// Below the type annotations are too long, hence the reason why we use Interface
// const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {

// Provide printVehicle with requirements of Vehicle Interface
// Making it more a reusable function that satisfies the Reportable interface. 
const printSummary = (item: Reportable): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken? ${vehicle.broken}`);
console.log(item.summary());
};

// These two share the same interface of Reportabe because they both have the summary property.
// We ca use a single interface to describe the shape and properties of very differnt objects. 
printSummary(oldCivic);
printSummary(drink);