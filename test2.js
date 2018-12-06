var dog = {
	// Object Creation
	name: "jimmy",
	age: 3,
	bark: function(){
		console.log("It's bark");
	},
	// object value Reassingment
	age: 4
};

console.log(dog.name)
console.log(dog.age)
// Method Call
console.log(dog.bark())

// Default Methods
// 1) hasOwnProperty
console.log(dog.hasOwnProperty("name"))
console.log(dog.hasOwnProperty("weight"))

// 2) keys  (its not always in order)
console.log(Object.keys(dog))
// 3) values
console.log(Object.values(dog))
// 4) entries
console.log(Object.entries(dog))


