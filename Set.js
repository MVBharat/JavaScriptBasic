// Creating Set
var set = new Set()

// Adding values to Set
set.add("Facebook");
set.add("Twitter")
set.add("Facebook"); // Set dosen't take duplicating values

console.log(set)
// Set size
console.log(set.size)
// has in Set
console.log(set.has("Twitter"))
console.log(set.has("Twitter2"))

// Deleting Set values
set.delete("Facebook")
console.log(set)

// Clear the Set

set.clear()
console.log(set)