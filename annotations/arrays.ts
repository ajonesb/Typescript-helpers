// Type Annotations in Typescript for Arrays

// IF we don't use annotation, it'll show any type which u want to avoid.
const carMakersTwo = [];

// Annotation avoids here the any type
const carMakerswithAnnotation: string[] = [];

// With annotation
const carMakers: string[] = ["ford", "toyota", "chevy"];

// Assign new Date object instances to array of dates
const dates = [new Date(), new Date()];

// Don't need type annotion
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Does need type annotation if we didn't have any content in array when we initialized it.
const carsByMakeTwo: string[][] = [];

// Help with inference when extracting values, inference will show carMakers gets back string
const car = carMakers[0];

// Remove last element in array
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), "2030-10-10"];
// Will work since fits the criteria of either a string or Date object
importantDates.push('2030-10-10');
importantDates.push(new Date());
// Wont work since it's neither a string or Date object
importantDates.push(100);
// If doesn't have annotation with an empty array, will end up with a any type which need to avoid
const importantDatesAnyWrong = [];

