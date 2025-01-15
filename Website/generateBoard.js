import TileBag from "/modules/tileBag.js";
import Hand from "/modules/hand.js";
import Board from "/modules/board.js";
import {allowDrop,drag,drop} from "/modules/dragAndDrop.js";
import Tile from "/modules/tile.js";

const handSize = 3
const boardWidth = 3; const boardHeight = 3;

const container = document.createElement("div");
container.setAttribute("id", "container");
document.getElementById("body").appendChild (container);

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
			cell.setAttribute("id", gridName[0] + String(j).padStart(2, 0) + String(i).padStart(2, 0));
			row.appendChild(cell);
		}
	}
}

const tilePool = new TileBag;
const hand = new Hand(handSize);
const board = new Board(boardWidth, boardHeight);

//generation of the board
BuildGrid("board",boardWidth,boardHeight);

//generation of the hand
BuildGrid("hand",handSize,1);
for(let i = 0; i < handSize; i++){
	hand.AddToHand(tilePool.TakeTile());
	const currentTile = hand.handArray[i];
	currentTile.DrawTile(currentTile.letter + String(currentTile.value).padStart(2, 0) + tilePool.topPointer, document.getElementById("h"+String(i).padStart(2, 0)+"00"), currentTile);
	//DrawTile() takes (ID, cell, tile)
}

function dropTile(event){
	const droppedTileID = event.dataTransfer.getData("text");
	const droppedTile = new Tile(droppedTileID[0], Number(droppedTileID[1]+droppedTileID[2]));
	console.log("AAH! " + droppedTile.letter + droppedTile.value);
	console.log(event.dataTransfer.getData("text"));
	console.log(event.target.id);
	const dropX = Number(event.target.id[1]+event.target.id[2]);
	const dropY = Number(event.target.id[3]+event.target.id[4]);
	console.log("X:" + dropX + " Y:" + dropY);
	board.AddTile(droppedTile, dropX, dropY);
}
function pickTile(event){
	
}


//adding event listeners
const cells = document.querySelectorAll("div.cell");
const tiles = document.querySelectorAll("div.tile");
//https://www.w3schools.com/jsref/met_document_queryselectorall.asp 8:12 15/01/2025

for(let i = 0; i < cells.length; i++){
	cells[i].addEventListener('dragover', allowDrop);
	cells[i].addEventListener('drop', drop);
	cells[i].addEventListener('drop', dropTile);
}
for(let i = 0; i < tiles.length; i++){
	tiles[i].addEventListener('dragstart', drag);
	tiles[i].addEventListener('dragstart', pickTile);
}
//https://stackoverflow.com/questions/53630310/use-functions-defined-in-es6-module-directly-in-html 7:50 15/01/2025
//you don't use the "on" prefix when using querySelector


//debug feature for checking the hand
for(let i = 0; i < hand.handArray.length; i++){
	console.log(hand.handArray[i].letter + hand.handArray[i].value);
}
/*
//debug feature for checking the tile pool
for(let i = 0; i < tilePool.tiles.length; i++){
	console.log(tilePool.tiles[i].ID); 
}
*/