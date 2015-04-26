/* */



$(document).ready(function() {

	console.log('Document ready');

	/* Toggle background music with spacebar (keycode 32) */
	$('audio')[0].play();

	$('body').keypress(function(ev) {
		console.log(ev.which)

		if (ev.which !== 32) {
			return;
		}

		if ($('audio')[0].paused) {
			$('audio')[0].play()
		} else {
			$('audio')[0].pause()
		}
	});


	/**/
	// 'Swift Studios reluctantly presents',
	var introduction = ['A half-arsed product cobbled together in an afternoon',
	                    'SUDOKU'];

	// introduction[0]

	var introdiv = $('.introduction');
	console.log('Binding animation callback');

	$('.introduction').bind('webkitAnimationIteration', function() {
		console.log('Animation iteration finished');
		$(this).html(introduction.shift());
	});

	// introdiv.addClass('fadein');
	var delay = 1200;
	var duration = 4300;

	// window.setTimeout(function() { introdiv.addClass('fadein'); }, delay);
	// window.setTimeout(function() { introdiv.removeClass('fadein'); introdiv.addClass('fadeout'); }, delay+duration);
	// window.setTimeout(function() { introdiv.removeClass('fadein'); introdiv.addClass('fadeout'); }, 2200);
	
	/*.map(function(str, index, strings) {
		console.log('Just for the side effects');
		$('.introduction').animate({
			color: 'rgba(255, 255, 255, 1.0)' 
		}, {
			start: function() {
				// TODO: Can I use 'this' here?
				console.log('Animating...');
				$('.introduction').html(str);
				// $('.introduction').css({ color: 'rgba(255, 255, 255, 0.2)' });

			},

			queue:    true,
			duration: 2300

		});
	});
*/

});