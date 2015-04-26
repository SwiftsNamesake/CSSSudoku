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

	// The board is stored as a list of columns (2D array)
	// Zero indicates an empty tile.
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


// TODO: Refactor logic (extract common code - unique elements, zero filter, slices - possibly by extending Array)
// TODO: Check arguments (?)
Sudoku.prototype.validColumn = function(icol) {
	return this.board[icol].filter(function(value, index, column) { return n != 0; })
	                       .every(function(value, index, column) { return column.indexOf(value) === index; });
}


Sudoku.prototype.validRow = function(irow) {
	// No lazy transpositions in JavaScript, but this'll do (create the row array)
	return [0,1,2,3,4,5,6,7,8].map(function(icol, index, indeces)  { return this.board[icol][irow]; })
	                          .filter(function(value, index, row)  { return n != 0; })                        // 
	                          .every(function(value, index, row)   { return row.indexOf(value) === index; }); // 
}


Sudoku.prototype.validSubgrid = function(icol, irow) {
	// No lazy transpositions in JavaScript, but this'll do (create the subgrid array)
	return [0,1,2,3,4,5,6,7,8].map(function(index, _, indeces)         { return this.board[3*icol + (index%3)][3*irow + Math.floor(index/3)]; })
	                          .filter(function(value, index, subgrid)  { return n !== 0; })                           // Filter out empty tiles
	                          .every(function(value, index, subgrid)   { return subgrid.indexOf(value) === index; }); // Make sure no tile value is duplicated
}



function validBoard(board) {
	// TODO: More informative (fine-grained) outcome (eg. returning dict or array of error locations)
	return [0,1,2,3,4,5,6,7,8].every(function(n) {
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