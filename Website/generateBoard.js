import TileBag from "/classes/tileBag.js";
import Hand from "/classes/hand.js";

const handSize = 5;

//function to build a grid for the board and hand
function BuildGrid(gridName, height, width){
	let grid = document.getElementById(gridName);
	for (let i = 0; i < height; i++){
		let row = document.createElement("div");
		row.setAttribute("id", "row");
		grid.appendChild(row);
		
		for (let j = 0; j < width; j++) {
			let cell = document.createElement("div");
			cell.setAttribute("id", "cell");
			row.appendChild(cell);
		}
	}
}

const tilePool = new TileBag;
const hand = new Hand;

//generation of the board
BuildGrid("board",3,3);

//generation of the hand
BuildGrid("hand",1,handSize);
for(let i = 0; i < handSize; i++){
	hand.AddToHand(tilePool.TakeTile());
}

//debug feature for checking the hand
for(let i = 0; i < 5; i++){
	document.getElementById("debug").innerHTML += hand.hand[i].letter + hand.hand[i].value + " ";
}