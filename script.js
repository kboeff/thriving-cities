// Get the modal
let modal = document.getElementById('myModal');

// Get the image and text, then insert it inside the modal
var modalImg = document.getElementById("mod-img");
var captionText = document.getElementById("caption");
var modText = document.getElementById("mod-text");
var modLink = document.getElementById("mod-link");

// Additional text for the events
const descriptions = ["<br>Opera Memphis’ sixth annual MIDTOWN OPERA FESTIVAL is coming to Playhouse on the Square April 6-14, 2018. The Festival is anchored by two evenings of opera, <em>The Triumph of Honor</em> and <em>The Opera 901 Showcase</em>. Each opera is preceded by an Opera Prelude Talk, providing insight into the story, characters, and music we'll experience. After the opera, the audience is invited to join us for in the Festival Lounge for a drink or head to one of the many Festival Fringe Events.<br>Surrounding the operas, we've curated a world of additional events, called Fringe Events, that are designed to deepen your experience, highlight something new, or expand the definition of what an opera festival can be. This year, the Fringe Event calendar features performances by Collage Dance Collective; the return of Aria Jukebox back by popular demand; Opera Takes Flight, in which aerialists perform to opera's greatest hits; and the ever-popular family event Cartoons & Cereal, featuring some of those great classic cartoons that introduced generations to the sound of opera.",
"<br>Food truck selection varies each week. Enjoy extra seating and picnic tables, perfect weather, and live music throughout the year!",
"<br>Beers, Breweries and Beer enthusiasts from the region will gather near the bluffs of the Mississippi River on a Spring afternoon for a sampling of fresh beers of all colors, styles and tastes. ALL net proceeds of the Memphis Brewfest benefit Parent Project Muscular Dystrophy.<br>Memphis Brewfest will be held outdoors on the field at Liberty Bowl Stadium, 335 S Hollywood St., Memphis, Tennessee (intersection of Central & East Parkway).",
"<br>Kick off spring with the 22nd Annual City Auto Rajun Cajun Crawfish Festival on the banks of the Mighty Mississippi. One of Memphis' most popular events returns with something for everyone. In addition to over 18,000 pounds of crawfish, the event hosts a variety of vendors selling food, drinks, art and more! This year, we're adding a new item: spicy boiled shrimp! A special thanks to the Riverfront Development Corporation for hosting the Festival again this year and allowing us to expand our space to include Riverside Drive! <br>As usual, no pets, coolers, tents, handouts, or parking inside the festival area. The festival is free admission."];

// Handles clicks on blog items
const getId = (id) => {
	div = document.getElementById(id);
	modal.style.display = "block";
	
	if(id === "event2") {
		modalImg.src = "pics/opera.jpg";
		captionText.innerHTML = document.getElementsByClassName("blog-title")[0].innerHTML;
		modText.innerHTML = document.querySelectorAll("small")[0].innerHTML + descriptions[0];
		modLink.innerHTML = "Official Page";
		modLink.href = "https://operamemphis.org/MOF18";
	} else if(id === "event3") {
		modalImg.src = "pics/food-truck.jpg";
		captionText.innerHTML = document.getElementsByClassName("blog-title")[1].innerHTML;
		modText.innerHTML = document.querySelectorAll("small")[1].innerHTML + descriptions[1];
		modLink.innerHTML = "Facebook Page";
		modLink.href = "https://www.facebook.com/MidsouthFTFest/";
	} else if(id === "event4") {
		modalImg.src = "pics/brewfest.jpg";
		captionText.innerHTML = document.getElementsByClassName("blog-title")[2].innerHTML;
		modText.innerHTML = document.querySelectorAll("small")[2].innerHTML + descriptions[2];
		modLink.innerHTML = "Official Page";
		modLink.href = "https://www.memphisbrewfest.com/";
	} else if(id === "event5") {
		modalImg.src = "pics/rajun.jpg";
		captionText.innerHTML = document.getElementsByClassName("blog-title")[3].innerHTML;
		modText.innerHTML = document.querySelectorAll("small")[3].innerHTML + descriptions[3];
		modLink.innerHTML = "FindFestival Page";
		modLink.href = "https://www.findfestival.com/memphis/rajun-cajun-crawfish-festival-info/";
	}
    
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
