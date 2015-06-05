// 1. CHEATSHEET!!!!

// VARIABLES - can be strings, numbers, arrays, boolean or undefined!

	var string = "Some words";
	var number = 1;
	var array = ["item", "thing", "bit", "stuff"];


// FOR LOOP

	var multiplier = 9;
		for(var i=0; i<=10; i++) {
			var result = multiplier * i;
			console.log(multiplier + ' x ' + i + " = " + result);
		}


// FUNCTION using IF STATEMENT
	function greaterNum(num1,num2) {
		if(num1 > num2){
			console.log(num1);
			} else {
			console.log(num2);
			}
	}


// FUNCTION that RETURNS SOMETHING

	function helloWorld(lang) {
  if (lang == 'fr') {
    return 'Bonjour tout le monde';
  } else if (lang == 'es') {
    return 'Hola, Mundo';
  } else {
    return 'Hello, World';
  }
}


// FUNCTION that DOES NOT return something

	function greaterNum(num1,num2) {
	if(num1 > num2){
		console.log(num1);
		} else {
		console.log(num2);
		}
}


// 2. favoriteThings array & for loop

	var favoriteThings = ["kitty cats", "bacon", "anything orange", "wine", "cheese"];

	for (var i=1; i<=favoriteThings.length; i++) {
		console.log("My #" + i + " favorite thing is " + favoriteThings[i] + "!");
	}



// BONUS FizzBuzz!


for (var i=1; i<=100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
		} else if (i % 3 === 0) {
		console.log("Fizz");
		} else if (i % 5 === 0) {
		console.log("Buzz");
		} else {
		console.log(i);
		}
  }

