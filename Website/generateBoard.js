//generation of the board
const board = document.getElementById("board");
for (let i = 0; i < 3; i++){
	const row = document.createElement("div");
	row.setAttribute("id", "row");
	board.appendChild(row);
	
	for (let j = 0; j < 3; j++) {
		const cell = document.createElement("div");
		cell.setAttribute("id", "cell");
		row.appendChild(cell);
	}
}

//generation of the hand
const hand = document.getElementById("hand");
for (let i = 0; i < 5; i++){
	const cell = document.createElement("div");
	cell.setAttribute("id", "cell");
	hand.appendChild(cell);
}

//COMMENT: turn into recursive function?