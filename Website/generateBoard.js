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
			cell.setAttribute("id", gridName[0] + i + "-" + j);
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
	currentTile.DrawTile("H" + currentTile.letter + tilePool.topPointer, document.getElementById("h0-"+i), currentTile); //DrawTile() takes (ID, cell, tile)
}
/*
let IDIndicator = "H";
function IDTracker(event){
	if(event.target.id[0]=="h") IDIndicator = "H";
	else if (event.target.id[0]=="b") IDIndicator = "B";
	//console.log(IDIndicator);
}
function IDNuller(event){
	IDIndicator = "X";
	//console.log(IDIndicator);
}

let tileDragged = new Tile;
function tileTracker(event){
	tileDragged = event.target.id[0];
}

function dropTile(event){
	const targetX = event.target.id[1];
	const targetY = event.target.id[3];
	console.log(event.target.className);
	if(event.target.className == "tile"){
		if(IDIndicator == "B"){
			console.log("Luke Smith");
			console.log(event.target.id);
			hand.RemoveFromHand(event.target); 
			board.boardArray[targetX, targetY] = tileDragged;
			//console.log(hand.tilesInHand);
		}
		else if(IDIndicator == "H"){
			hand.AddToHand(event.target); 
			//console.log(hand.tilesInHand);
		}
	}
	
	//console.log("Luke Smith");
	for(let i = 0; i < hand.handArray.length; i++){
	console.log(hand.handArray[i].letter + hand.handArray[i].value);
	}
	
	/*
	for(let i = 0; i < boardHeight; i++){
		for(let j = 0; j < boardWidth; j++){
			console.log(board.boardArray[i,j].id);
		}
	}
	
}*/


//adding event listeners
const cells = document.querySelectorAll("div.cell");
const tiles = document.querySelectorAll("div.tile");
//https://www.w3schools.com/jsref/met_document_queryselectorall.asp 8:12 15/01/2025

for(let i = 0; i < cells.length; i++){
	cells[i].addEventListener('dragover', allowDrop);
	cells[i].addEventListener('drop', drop);
	//cells[i].addEventListener('dragover', IDTracker);
	//cells[i].addEventListener('dragleave', IDNuller);
	//cells[i].addEventListener('dragend', dropTile);
}
for(let i = 0; i < tiles.length; i++){
	tiles[i].addEventListener('dragstart', drag);
	//tiles[i].addEventListener('dragstart', tileTracker);
	//tiles[i].addEventListener('dragstart', pickTile);
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
	console.log(tilePool.tiles[i].letter); 
}
*/