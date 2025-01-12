import TileBag from "/classes/tileBag.js";
import Hand from "/classes/hand.js";

const handSize = 5;

const boardContainer = document.createElement("div");
const handContainer = document.createElement("div");
boardContainer.setAttribute("id", "board");
handContainer.setAttribute("id", "hand");
document.getElementById("body").appendChild (boardContainer);
document.getElementById("body").appendChild (handContainer);

//function to build a grid for the board and hand
function BuildGrid(gridName, height, width){
	let grid = document.getElementById(gridName);
	for (let i = 0; i < height; i++){
		let row = document.createElement("div");
		row.setAttribute("id", "row");
		grid.appendChild(row);
		
		for (let j = 0; j < width; j++) {
			let cell = document.createElement("div");
			cell.setAttribute("class", "cell");
			cell.setAttribute("ondrop", "drop(event)");
			cell.setAttribute("ondragover", "allowDrop(event)");
			cell.setAttribute("id", gridName[0] + i + "-" + j);
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
	
	const cell = document.getElementById("h0-"+i);
	const handTile = document.createElement("div");
	handTile.setAttribute("id", hand.hand[i].letter + tilePool.topPointer);
	handTile.setAttribute("class", "tile");
	handTile.setAttribute("draggable", "true");
	handTile.setAttribute("ondragstart", "drag(event)");
	handTile.innerHTML = hand.hand[i].letter;
	cell.appendChild(handTile);
	
	const handValue = document.createElement("p");
	handValue.setAttribute("id", "tileValue");
	handValue.innerHTML = hand.hand[i].value;
	handTile.appendChild(handValue);
}

//debug feature for checking the hand
for(let i = 0; i < 5; i++){
	console.log(hand.hand[i].letter + hand.hand[i].value);
}
//debug feature for checking the tile pool
/*
for(let i = 0; i < tilePool.tiles.length; i++){
	console.log(tilePool.tiles[i].letter); 
}
*/