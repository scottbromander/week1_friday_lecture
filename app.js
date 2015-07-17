$(document).ready(function(){
	$("#someForm").submit(function(event){
		event.preventDefault();

		var $inputs = $("#someForm :input");
		var values = {};

		$inputs.each(function(){
			values[this.name] = $(this).val();
		});

		console.log($inputs);
		console.log(values);
		console.log(values.firstname);
		console.log(values.lastname);
		console.log(values.hitpoints);
	});

	$("body").on('click', '.superButton', function(){
		createNewThing();
	});

	$("body").on('click', '.awesomeButton', function(){
		alert("AWESOME BUTTON CLICKED!");
	});
});

function createNewThing(){
	$("body").append("<div></div>");
	var $el = $("body").children().last();
	$el.append("<p>Here is a new line!</p>");
	$el.append("<button class='awesomeButton'>Awesome Button</button>");
}

//<div class="superButton unselected"></div>