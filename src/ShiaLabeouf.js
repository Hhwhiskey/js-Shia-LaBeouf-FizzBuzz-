//How would I test this?
var numberFromUser = prompt("Enter any number to start Shia LaBeouf!");

//Or this?
while (isNaN(numberFromUser)) {
	var numberFromUser = prompt("Enter any number to start Shia LaBeouf!");
} 

shiaLabeouf(numberFromUser);

function shiaLabeouf(numTest) {
	
	if (numTest % 15 === 0) {
		alert("Shia LaBeouf");
		return "Shia LaBeouf";
	} else if (numTest % 3 === 0) {
		alert("Shia");
		return "Shia";
	} else if (numTest % 5 === 0) {
		alert("LaBeouf");
		return "LaBeouf";
	} else {
		alert(numTest);
		return numTest;
	}
}









