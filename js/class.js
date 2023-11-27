// class StringBuilder {
//     constructor (initialValue) {
//         this.value = initialValue;
//     }
//     getValue() {
//     return this.value;
//     }

//     padStart(str) {
//         return this.value += str;
//     }

//       padEnd(str) {
//     return this.value + `${str}` 
//         }

//     padBoth(str) { 
//     return `${str} ${this.value} ${str}`;
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Movie {
//     constructor(name, category, startShow) {
//         this.name = name;
//         this.category = category;
//         this.startShow = startShow;
//     }
//     watchMovie() {
//         return `I watch the movie ${this.name}!`;
// }    
// }

// const movie1 = new Movie("Titanic", "drama", 1997)
// const movie2 = new Movie("Troya","historical",2004)

// class Student {
//     #fullName;
//     #direction;
// constructor(fullName, direction) {
//     this.#fullName = fullName;
//     this.#direction = direction;
// }
//     getFullName() {
//         return this.#fullName;
//     }
//     nameIncludes(data) {
//         return this.getFullName().includes(data);
//     }
//     static studentBuilder() {
//         return new Student("Ihor Kohut", 'qc');
        
//     }
//     get direction() {
//         return this.#direction;
//     }

//     set direction(direction) {
//         return this.#direction = direction;
//     }
// }

// const stud1 = new Student('Ivan Petrenko', 'web');
// const stud2 = new Student('Sergiy Koval', 'python');

// console.log(stud1)
// console.log(stud1.getFullName());
// console.log(stud1.direction);

// class Distributor {
//     constructor() {
//         this.products = {};
//     }
    
//     addProduct(id, name) {
//         return this.products[id] = name;
//     }
    
//  removeProduct(id) {
//      if (!this.products[id]) {
//          return `There is no id: ${id}`
//      }
//         return delete this.products[id];
//  }
// }

// const localDistributor = new Distributor();

// class MyProduct{
//     constructor(name) {
//         this.id = Symbol(name);
//         this.name = name;
//     }
    
//     distribute(distributor) {
//         distributor.addProduct(this.id, this.name);
//     }
// }

	
// const product1 = new MyProduct('butter');
// product1.distribute(localDistributor)
// console.log(localDistributor.products);

// function getMin(arr) {
// return Math.min.apply(null, arr);
// }

// const product = function (...arguments) {
//     return [].reduce.call(arguments,function (res, elem) {
//       return res * elem;
//     }, this.product);
// };

// const contextObj = {
//     product: 10,
// }
// you can use this constant to store object this
    
// const getProduct = function (a, b){
// return product.call(contextObj, 2, 3, a, b);
// }

// const getProduct = bind(contextObj, 2, 3);

// console.log(getProduct(4, 5));

// class Plane {
//     constructor(model, fuelSupply, fuelConsumption) {
//         this.model = model;
//         this.fuelSupply = fuelSupply;
//         this.fuelConsumption = fuelConsumption;
//     }

//     calcFlightRange() {
//         return this.fuelSupply / this.fuelConsumption * 100;
//     }

//     static showSortedByFlightRange(planesArray) {
//         return [...planesArray].sort((planeOne, planeTwo) =>
//             planeOne.calcFlightRange() - planeTwo.calcFlightRange()
//         ).map(plane => console.log(`${plane.model}: ${plane.calcFlightRange()}`))
//     }
// }

// class TransportPlane extends Plane {
//     constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
//         super(model, fuelSupply, fuelConsumption);
//         this.cargo = cargo;
//         this.addTank = addTank;
//     }

//     calcFlightRange() {
//         return (this.fuelSupply + this.addTank) / this.fuelConsumption * 100;
//     }
// }

// class PassengerPlane extends Plane {
//     constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
//         super(model, fuelSupply, fuelConsumption);
//         this.passengers = passengers;
//         this.refueling = refueling;
//     }

//     calcFlightRange() {
//         return (this.fuelSupply + this.refueling) / this.fuelConsumption * 100;
//     }
// }

// class WarPlane extends Plane {
//      constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
//         super(model, fuelSupply, fuelConsumption);
//         this.missiles = missiles;
//         this.aerodynamicsKoef = aerodynamicsKoef;
//      }
    
//  calcFlightRange() {
//         return this.fuelSupply * this.aerodynamicsKoef / this.fuelConsumption * 100 ;
//     }
// }

// hi

