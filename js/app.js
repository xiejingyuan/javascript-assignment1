// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let arr1 = ["Dog", "Car", "Teacher", "Bird", "Child", "Music", "Student", "Fire", "Boat", "Actor"]
let arr2 = ["chases", "passes", "assigns", "finds", "draws", "fills", "writes", "melts", "sails", "performs"]
let arr3 = ["small", "old", "difficult", "bright", "funny", "quiet", "long", "large", "big", "dramatic"]
let arr4 = ["ball", "truck", "homework", "worm", "picture", "room", "essay", "log", "waves", "scene"]
let arr5 = ["in the yard", "on the highway", "in the classroom", "in the forest", "at the park", "in the studio", "at the library", "at the campsite", "on the lake", "on the stage"]
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let reset = document.getElementById("reset");
var textToSpeak = '';
var speakButton = document.getElementById("sentence");
let content = document.getElementById("content")

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
function selectWord(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	textToSpeak += arr[randomIndex] + ' ';
	content.innerHTML = 'Selected Words: ' + textToSpeak;
}
function resetText() {
	textToSpeak ='';
	content.innerHTML = textToSpeak;
}
/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
button1.onclick = function() {
	selectWord(arr1);
}
button2.onclick = function() {
	selectWord(arr2);
}
button3.onclick = function() {
	selectWord(arr3);
}
button4.onclick = function() {
	selectWord(arr4);
}
button5.onclick = function() {
	selectWord(arr5);
}
reset.onclick = function() {
	resetText();
}
