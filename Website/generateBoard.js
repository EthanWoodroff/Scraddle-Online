import TileBag from "/classes/tileBag.js";
import Hand from "/classes/hand.js";
import {allowDrop,drag,drop} from "/dragAndDrop.js";

const handSize = 7;
const boardWidth = 3; const boardHeight = 3;

const boardContainer = document.createElement("div");
const handContainer = document.createElement("div");
boardContainer.setAttribute("id", "board");
handContainer.setAttribute("id", "hand");
document.getElementById("body").appendChild (boardContainer);
document.getElementById("body").appendChild (handContainer);

//function to build a grid for the board and hand
function BuildGrid(gridName, width, height){
	let grid = document.getElementById(gridName);
	for (let i = 0; i < height; i++){
		let row = document.createElement("div");
		row.setAttribute("id", "row");
		grid.appendChild(row);
		
		for (let j = 0; j < width; j++) {
			let cell = document.createElement("div");
			cell.setAttribute("class", "cell"); 
			/*
			cell.setAttribute("ondrop", "drop(event)");
			cell.setAttribute("ondrop", "placeTile(event)");
			cell.setAttribute("ondrag", "pickTile(event)");
			cell.setAttribute("ondragover", "allowDrop(event)");
			*/
			cell.setAttribute("id", gridName[0] + i + "-" + j);
			row.appendChild(cell);
		}
	}
}
/*
function placeTile(event){
	console.log(event);
}
function pickTile(event){
	console.log(event);
}
*/
const tilePool = new TileBag;
const hand = new Hand;

//generation of the board
BuildGrid("board",boardWidth,boardHeight);

//generation of the hand
BuildGrid("hand",handSize,1);
for(let i = 0; i < handSize; i++){
	hand.AddToHand(tilePool.TakeTile());
	const currentTile = hand.hand[i];
	currentTile.DrawTile(currentTile.letter + tilePool.topPointer, document.getElementById("h0-"+i), currentTile); //DrawTile() takes (ID, cell, tile)
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

document.querySelector('div.cell').addEventListener('ondragover', allowDrop);
document.querySelector('div.cell').addEventListener('ondrop', drop);