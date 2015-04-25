/*
 *
 *
 */



function Sudoku() {
	
	/**/

	// TODO: Decide on API (constructor function or namespace object)

	if (this === window) {
		console.error('Constructor \'Sudoku\' used as a normal function (without new).');
		return;
	}


	this.board = [[0,0,0,0,0,0,0,0,0],
	              [0,0,0,0,0,0,0,0,0],
	              [0,0,0,0,0,0,0,0,0],
	              [0,0,0,0,0,0,0,0,0],
	              [0,0,0,0,0,0,0,0,0],
	              [0,0,0,0,0,0,0,0,0],
	              [0,0,0,0,0,0,0,0,0],
	              [0,0,0,0,0,0,0,0,0],
	              [0,0,0,0,0,0,0,0,0]];

}


Sudoku.prototype.validColumn = function(icol) {
	filled = this.board[icol].filter(function(n) { return n != 0; }); // A list of all filled (non-zero) tiles in the column

}


Sudoku.prototype.validRow = function(irow) {
	return [0,1,2,3,4,5,6,7,8].every(function(icol) {

	});
}


Sudoku.prototype.validSubgrid = function(icol, irow) {
	var subgrid = [0,1,2,3,4,5,6,7,8].map(function(n) { return this.board[3*icol + (n%3)][3*irow + Math.floor(irow/3)]; });
	return [0,1,2,3,4,5,6,7,8].every(function(n) { return subgrid.indexOf(n) ; });
}



function validBoard(board) {
	return [1,2,3,4,5,6,7,8].every(function(n) {
		return sudoku.validRow(n) && sudoku.validColumn(n) && sudoku.validSubgrid(n%3, Math.floor(n/3));
	});
}


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
			// selected.
		}
	});


});