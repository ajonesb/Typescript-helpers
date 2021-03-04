// Type Annotations in Typescript for Objects

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

// Object destructuring with type annotation
const { age }: { age: number } = profile;
const {coords: { lat, lng } } : {coords: {lat: number; lng: number}} = profile;