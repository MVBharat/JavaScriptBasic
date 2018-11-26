// Variables

var name ="BHARAT" //initialized
var surname = "mane"

// constant variable

const age = 25

// Boolean
var pizzaIsGood = true
console.log(pizzaIsGood)


// Lowe case and Upper case
var y = "My house is blue";

console.log("My Name "+ name );
console.log("my age is " + age);

console.log(name.toLowerCase());
console.log(surname.toUpperCase());

// Repeat and Replace
console.log("repeating my name 3 times "+ name.repeat(3))
console.log("before "+ y + "\n"+ "now "+ y.replace("blue", " white "))

console.log(y.includes("blue"))
console.log(y.includes("nothing"))


// Symbol

const SIZE_SMALL = Symbol();
const SIZE_MEDIAM = Symbol();
const SIZE_LARGE = Symbol();

function getShirtLeftInSize(size){
	if (size === SIZE_SMALL){
		return 4;
	}
	else if(size === SIZE_MEDIAM){
		return 5;
	}
	else if (size === SIZE_LARGE)
		return 8;
}

var mysize = SIZE_MEDIAM; 

console.log("There are "+ getShirtLeftInSize(mysize) + " Shirts left in store")


// Null
var pears = null;

console.log("Pears are " +pears)

// Arithmetic operation
var mangos = 4;
var papaya = 4;
var banana = 4;
var apple = 4;
var chikku = 4;

mangos+=4; 
papaya-=4; 
banana*=4; 
apple/=4; 
chikku%=4; 

console.log("Addition of 4 = "+mangos)
console.log("Sustraction of 4 = "+papaya)
console.log("Multiplication of 4 ="+banana)
console.log("Devide of 4 ="+apple)
console.log("Modulus of 4 = "+chikku)


// Math  

var euler = Math.E
var pi = Math.PI

console.log("Euler Value = "+ euler)
console.log("PI Value = "+ pi)


// math method Absolute 

var a = 6;
var b= -33;
console.log("Absolute Value of a = " + a + " = " + Math.abs(a) + " . ")
console.log("Absolute Value of b = " + b + " = " + Math.abs(b) + " . ")

//  Floor and Ceiling

var decimal = 12.93
var floor = Math.floor(decimal)
var ceil = Math.ceil(decimal)
console.log("Floor of "+decimal + " is " +floor)
console.log("Ceiling of "+decimal + " is " +ceil)

// Logarithm

var number = 2
var num = Math.log(number)
console.log("Logarithm of "+ number + " is " +num)