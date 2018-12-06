class Pet {
	// constructor
	constructor(name, weight, price){
		this.name = name;
		this.weight = weight;
		this.price = price;
	}
// function
	getInfo(){
		return "Hi, my name is " + this.name + "I weigh " + this.weight + "pounds and I cost Re "+ this.price + "/-";
	}
}

var pet = new Pet("Fluffy", 10, 200)
// calling construction object  with passing values
console.log(" ***** calling construction object  with passing values ***** ")
console.log(pet)
// calling function
console.log(" **** calling function ****")
console.log(pet.getInfo() +"\n\n")


// inheritance
class Dog extends Pet{
	bark(){
		console.log("BARK BARK BARK")
	}
}

var dog = new Dog("Tommy", 14, 8);
console.log(" ****** Inheritance ********* ");
console.log(dog.getInfo());

dog.bark();

// Function Overriding and super keyword

class Cat extends Pet{

	constructor(name, weight, price, brand){
		super(name,weight,price);
		this.brand = brand
	}
	getFavoriteBrand(){
		return this.brand
	}

	getInfo(){
		return "Hi, I am a cat named " + this.name + " and I like " + this.brand
	}
}

var honey = new Cat("Honey", 9, 250, "Purina");
console.log("\n ******** Function Overriding and super keyword ********* \n")
console.log( "\n"+honey.getFavoriteBrand());
console.log(honey.getInfo());