//delete for bonus #1
var victimCount = prompt("How many victims do you wish to enter?")

var names = []
var phoneNumbers = []
var streets = []

for (i = 0; i < victimCount; i++) {
	names.push(prompt("What is their name?"))
	phoneNumbers.push(prompt("What is their phone number?"))
	streets.push(prompt("What is their street?"))
}

// Bonus #1 code
//  while (cont) {
// 	names.push(prompt("What is their name?"))
// 	phoneNumbers.push(prompt("What is their phone number?"))
// 	streets.push(prompt("What is their street?"))
// 	cont = confirm("Add another?")
// }


var volunteerCount = prompt("How many volunteers are needed?")
var volunteerNames = []
var volunteerPhones = []
var volunteerStreets = []

for (i = 0; i < volunteerCount; i++) {
	volunteerNames.push(prompt("What is their name?"))
	volunteerPhones.push(prompt("What is their phone number?"))
	volunteerStreets.push(prompt("What is their street?"))
}

alert("# of persons in need: " + victimCount + "\n# of volunteers: " + volunteerCount + "\nVictims: " + names + "\nVolunteers: " + volunteerNames) 
// Bonus #2 code
// var personInNeed = prompt("Who is in need?")
// var streetInNeed = ""
// for (i = 0; i < names.length; i++) {
// 	if (personInNeed === names[i]) {
// 		streetInNeed = streets[i]
// 	}
// }
// for (n = 0; n < streets.length; n++) {
// 	if (streetInNeed === volunteerStreets[n]) {
// 		alert("The closest volunteer is " + volunteerNames[n])
// 	}
// }