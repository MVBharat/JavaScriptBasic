	var apples = document.querySelector("#apple")
	var pears = document.querySelector(".pear")
	var mangos = document.querySelector("span")

// select elements by DOM
		console.log(apples)
		console.log(pears)
		console.log(mangos)
// Multiple element select by DOM
		var fruit = document.querySelectorAll(".fruit")
		console.log(fruit)

// Creating Element of Date
	var span = document.createElement("span")
	span.setAttribute("class","date");
	span.textContent = new Date().toDateString();
	document.body.appendChild(span);
	span.classList.add(".date");
// Removing Element
	var parent =  document.querySelector(".parent")

	// Method #1
	var kid = document.querySelector(".kid")
	parent.removeChild(kid)
	// Method #2
	var teen = document.querySelector(".teen")
	teen.parentNode.removeChild(teen)

//  Adding Removing and Testing Classes
	
	var apple1 = document.querySelector(".apple1")
	// Adding
	apple1.classList.add("apple1");
	console.log(apple1)
	// Removing
	var apple2 = document.querySelector(".apple1")

	apple2.classList.remove("apple2")
	console.log(apple2)

	var fruits = document.querySelector(".apple1")
	fruits.classList.add("testy")
	console.log(fruits)
// contains (testing a class present or not)
	if (fruits.classList.contains("testy")){
		console.log("apple is testy")
	}else{
		console.log("apple is not testy")
	}

// Setting Getting and Reomoving properties

	var link = document.querySelector("a")
	var b =link.href="www.mysite.com"
	console.log(b)
	// Getting
	var userNameInput  = document.querySelector(".userName")
	var userNameValue = userNameInput.value;
	console.log(userNameValue)
	// Setting
	span.good = "Mangos"
	console.log(span.good)
	// Removing
	delete span.good
	console.log(span.good)

// Setting Getting and reomoving Atrributes
	var animal = document.querySelector("img");
	// Getting
	console.log(animal.getAttribute("src"))
	// Setting
	animal.setAttribute("alt", "this is cat image ")
	// Removing
	animal.removeAttribute("alt")

// Dyanmically applying styles to Element
	var h3 = document.querySelector("h3")
	var style = getComputedStyle(h3, null);
	h3.style.backgroundColor= "green"
	h3.style.marginLeft = "20px"
	h3.style.marginRight = "20px"
	h3.style.padding = "30px"
	h3.style.borderRadius = "20px"
	h3.style.color = "white"
	console.log(style)