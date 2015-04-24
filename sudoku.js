/*
 *
 *
 */


$(document).ready(function() {

	/**/
	console.log('Document ready')

	$('body').keypress(function(ev) {
		console.log('Processing key press on board');
		var selected = $('.subgrid tr td:hover');
		var key      = String.fromCharCode(ev.which);
		if ('123456789'.indexOf(key) > (-1)) {
			/* A numeric key (not zero) was pressed */
			selected.html(key);
		}
	});


});