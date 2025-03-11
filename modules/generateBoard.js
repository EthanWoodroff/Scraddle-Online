//imports classes
import Tile from "/modules/tile.js";
import TileBag from "/modules/tileBag.js";
import Hand from "/modules/hand.js";
import Board from "/modules/board.js";
//imports scripts
import {allowDrop,drag,drop} from "/modules/dragAndDrop.js";

//defines traits
const handSize = 7;
const boardWidth = 7; const boardHeight = 7;

//setting css variables
var root = document.querySelector(":root");
root.style.setProperty("--columnCount", boardWidth);
root.style.setProperty("--rowCount", boardHeight);
root.style.setProperty("--handSize", handSize);

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
			cell.setAttribute("id", gridName[0] + String(j).padStart(2, 0) + String(i).padStart(2, 0) + "E");
			//the cell id is the first letter of the cells container followed by its coordinates followed by whether it is "E"mpty or "F"ull
			//e.g. a cell in the bottom right of a 3x3 board, with no tile in it, would have an id of "b0202E"
			row.appendChild(cell);
		}
	}
}

//creates necessary classes
const tilePool = new TileBag;
const hand = new Hand(handSize);
const board = new Board(boardWidth, boardHeight);

//generation of the board
BuildGrid("board",boardWidth,boardHeight);

//generation of the hand
BuildGrid("hand",handSize,1);
for(let i = 0; i < handSize; i++){
	hand.AddTile(tilePool.TakeTile(), i, 0);
	const currentTile = hand.gridArray[0][i];
	const currentCell = document.getElementById("h" + String(i).padStart(2, 0) + "00" + "E");
	const currentTileID = currentCell.id + currentTile.letter + String(currentTile.value).padStart(2, 0);
	//the tile id is the first letter of its current grid's name followed by the coordinates of its cell followed by whether its tile is "E"mpty or "F"ull (it should always be full), followed by its letter and value
	//e.g. a "Z" tile of value 10 in the bottom right of a 3x3 board would have an id of "b0202EZ10"
	currentTile.DrawTile(currentTileID, currentCell, currentTile);
}

function dropTile(event){
	//handles the tile dropping for the board array
	if(!(event.target.className == "cell" && event.target.id[5] == "E")) {return};
	//if the target that the tile's being dropped on isn't an empty cell, then the function doesn't run
	const droppedTileID = event.dataTransfer.getData("text");
	//the drag function in dragAndDrop.js sets the dataTransfer to the dragged element's ID
	const droppedTile = new Tile(droppedTileID[6], Number(droppedTileID[7]+droppedTileID[8]));
	
	const pickX = Number(droppedTileID[1]+droppedTileID[2]);
	const pickY = Number(droppedTileID[3]+droppedTileID[4]);
	if(droppedTileID[0] == "h"){
		hand.Delete(pickX, 0);
	}
	else if(droppedTileID[0] == "b"){
		board.Delete(pickX,pickY);
	}
	//hand.PrintHand();
	const startCell = document.getElementById(droppedTileID.slice(0,5) + "F");
	startCell.id = startCell.id.slice(0,-1) + "E";
	
	document.getElementById(droppedTileID).id = event.target.id + droppedTileID.slice(-3);
	//https://www.w3schools.com/js/js_string_methods.asp#mark_trimstart 11:50 16/01/2025
	const dropX = Number(event.target.id[1]+event.target.id[2]);
	const dropY = Number(event.target.id[3]+event.target.id[4]);
	if(event.target.id[0] == "h"){
		hand.AddTile(droppedTile, dropX, 0);
	}
	else if(event.target.id[0] == "b"){
		board.AddTile(droppedTile, dropX, dropY);
	}
	event.target.id = event.target.id.slice(0,-1) + "F";
	//hand.PrintHand();
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
}
//https://stackoverflow.com/questions/53630310/use-functions-defined-in-es6-module-directly-in-html 7:50 15/01/2025
//you don't use the "on" prefix when using querySelector


//debug feature for checking the hand
/*
for(let i = 0; i < hand.gridArray.length; i++){
	console.log(hand.gridArray[i].letter + hand.gridArray[i].value);
}

//debug feature for checking the tile pool
for(let i = 0; i < tilePool.tiles.length; i++){
	console.log(tilePool.tiles[i].letter + tilePool.tiles[i].value); 
}
*/



export default board;
export {boardWidth, boardHeight};