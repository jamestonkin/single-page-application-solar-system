var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
var el2 = document.getElementById('capitalized-planets');
var el3 = document.getElementById('e-planets');
var el4 = document.getElementById('sentence');

planets.forEach(function(item, index) {
  var newString = item;
  el.innerHTML += newString + ' ' + '<br>';
})

// Use the map method to create a new array where the first letter of each planet is capitalized
var capPlanets = planets.map(function(x){
  return x;
});
for(var i = 0 ; i < capPlanets.length ; i++)
{
    capPlanets[i] = capPlanets[i].charAt(0).toUpperCase() + capPlanets[i].substr(1, capPlanets[i].length - 1);
}
capPlanets.forEach(function(item, index){
  var newestString = item;
  el2.innerHTML += newestString + ' ' + '<br>';
});

// Use the filter method to create a new array that contains planets with the letter 'e'
function hasE(e) {
  return e.includes('e', 0);
}
var lettere = planets.filter(hasE);
el3.innerHTML += lettere + ' ' + '<br>';

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function remove (a, b) {
	return a + " " + b;
}

var sentence = words.reduce(remove);

el4.innerHTML += sentence;
