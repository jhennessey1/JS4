var victimCount = prompt("How many victims do you wish to enter?")

var names = []
var phoneNumbers = []
var streets = []

for (i = 0; i < victimCount; i++) {
	names.push(prompt("What is their name?"))
	phoneNumbers.push(prompt("What is their phone number?"))
	streets.push(prompt("What is their street?"))
}

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