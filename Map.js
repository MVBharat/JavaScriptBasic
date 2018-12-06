// creating Map object

var map = new Map()

// Set the values into map
map.set("red", "apple")
map.set("blue", "blueberry")
map.set("green", "pear")
map.set("green", "pear") // It dosen't take duplicate value

console.log(map)

// Get the Map values
var item = map.get("green")
console.log(item)

// size of the map
console.log(map.size)

// check has values exists in map
console.log(map.has("red"))
console.log(map.has("red2"))

// delete map key value
map.delete("red")
console.log(map)

// clear map 
map.clear()
console.log(map)