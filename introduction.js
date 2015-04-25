/* */



$(document).ready(function() {

	console.log('Document ready');

	/* Toggle background music with spacebar (keycode 32) */
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
	['Swift Studios reluctantly presents',
	 'A half-arsed product cobbled together in an afternoon',
	 'SUDOKU'
	].map(function(str, index, strings) {
		console.log('Just for the side effects');
		$('.introduction').animate({
			color: 'rgba(255, 255, 255, 255, 1.0)' 
		}, {
			start: function() {
				// TODO: Can I use 'this' here?
				$('.introduction').innerHTML = str;
				$('.introduction').css({ color: 'rgba(255, 255, 255, 255, 0.1)' });

			},

			queue:    true,
			duration: 2300

		});
	});


});