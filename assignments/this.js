/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. windows binding : Will simply show the windows object output.
* 2. Implicit binding: happens when we use this. it invoke a function.
* 
* 4. New Binding: constructs new objects
  4. explicit binding:happens when the .call(), .apply(); ..are call to invoke a function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
let object = {
    username: "jose",
    password: "raul",
    func: function() {
        return `${this.username} & ${this.password} are you credentials .`
    }
}
console.log(object.func())


// Principle 3

// code example for New Binding
function Students(NewGuy) {
    this.student = NewGuy;
    this.subScribe = function() {
        return `${this.student} is the new Student.`
    }
}
const newStudent = new Students('Jose');
console.log(newStudent.subScribe())

// Principle 4

// code example for Explicit Binding
let place = {
    place: "France",
}
let places = ["italy", "dominican republic", "USA"]

function likeToTravel(place1, place2, place3) {

    return `Hi, i like to travel to ${this.place} BUT after going to ${place2}, and ${place3}`;
};
//apply: 
console.log(likeToTravel.apply(place, places));
//call:
console.log(likeToTravel.call(place, places[1], places[2], places[0]));