var dog ={
	"name" : "pummy" ,
	"age" : 4,
	"weight" : 19

}

console.log("\n **** Json stringify **** \n")
var dogJson = JSON.stringify(dog)
console.log(dogJson)


var json = '{"name":"sopheya", "age": 2, "weight": 22}'
var dog = JSON.parse(json);
console.log("\n **** Json parsing **** \n")
console.log(dog);