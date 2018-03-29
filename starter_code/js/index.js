// create array of cities
var cityArray = ["New York City", "San Francisco", "Los Angeles", "Austin", "Sydney"];

// populate the select menu with cityArray
cityArray.forEach(function(city) {
	var option = `<option>${city}</option>`
	// append it to our select element
	$("select").append(option); 
	});
	$("select").change(function(){ // when the selection changes, do this
	var selected = $("select").val(); // get the selection
	if (selected == 'New York City') {
            $("body").attr("class", 'nyc'); 
            } // change background to ny
        else if (selected == 'San Francisco') {
            $("body").attr("class", 'sf');
            } // change to other cities if not ny
        else if (selected == 'Los Angeles') {
            $("body").attr("class", 'la');
            }
        else if (selected == 'Austin') {
            $("body").attr("class", 'austin');
            }
        else if (selected == 'Sydney') {
            $("body").attr("class", 'sydney');
            }
        else {
            $("body").css("background-image", "url(images/citipix_skyline.jpg)"); // or go back to default when input doesn't match any if statements
        }
});