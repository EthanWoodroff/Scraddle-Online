import TileBag from "/classes/tileBag.js";
import Hand from "/classes/hand.js";
import {allowDrop,drag,drop} from "/dragAndDrop.js";

const handSize = 7;
const boardWidth = 3; const boardHeight = 3;

const boardContainer = document.createElement("div");
boardContainer.setAttribute("id", "board");
document.getElementById("body").appendChild (boardContainer);
const handContainer = document.createElement("div");
handContainer.setAttribute("id", "hand");
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
			cell.setAttribute("id", gridName[0] + i + "-" + j);
			row.appendChild(cell);
		}
	}
}

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

//adding event listeners
const cells = document.querySelectorAll("div.cell");
const tiles = document.querySelectorAll("div.tile");
//https://www.w3schools.com/jsref/met_document_queryselectorall.asp 8:12 15/01/2025

for(let i = 0; i < cells.length; i++){
	cells[i].addEventListener('dragover', allowDrop);
	cells[i].addEventListener('drop', drop);
	//cells[i].addEventListener('drop', dropTile);
}
for(let i = 0; i < tiles.length; i++){
	tiles[i].addEventListener('dragstart', drag);
	//tiles[i].addEventListener('dragstart', pickTile);
}
//https://stackoverflow.com/questions/53630310/use-functions-defined-in-es6-module-directly-in-html 7:50 15/01/2025
//you don't use the "on" prefix when using querySelector

/*
//debug feature for checking the hand
for(let i = 0; i < 5; i++){
	console.log(hand.hand[i].letter + hand.hand[i].value);
}
//debug feature for checking the tile pool
for(let i = 0; i < tilePool.tiles.length; i++){
	console.log(tilePool.tiles[i].letter); 
}
*/