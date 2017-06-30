//Problem: When resized to small windows the nav bar the links wrap and look bad
//Solution: To hide the text links and replace them with appropriate navigation

//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over each nav link and add as an option for select box
$("#menu a").each(function () {
	var $anchor = $(this);
//create option
	var $option = $("<option></option>");
//options value is href
	$option.val($)
//options text  is text of link
	$option.text($anchor.text());
//append to select
$select.append($option);
});
//create button
//bind click to button to go to selects location
//modify css to hide links on small width and show button and select
//hide select button on larger widths
// add property 'selected' when on page
