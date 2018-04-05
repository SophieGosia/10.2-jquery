// changes in CSS - jquery
var span = $('span');
    span.each(function(index, element) {
});

// Color change - 2 possible ways
/*span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
}); */

$('span:even').css('color', 'red');

// Add new elements in jquery
var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
});

// Event handlers
$('button').click(function(){
	alert($(this).attr('data-tmp'));
});