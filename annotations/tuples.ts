// Tuple -> Array like structure where each element represents some property of a record.

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Tuple here assigned showing this array will have a consistent order inside
const pepsi: [string, boolean, number] = ["brown", true, 40];
// Error because first in order should be string
pepsi[0] = 40;

// Alternate way would be a type Alias to not repeat out type definition
type Drink = [string, boolean, number];

// Then add your Alias
const dietPepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const sunkist: Drink = ["orange", true, 70];
const tea: Drink = ["brown", false, 0];

// Best to use object convention instead of tuples
const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354,
}