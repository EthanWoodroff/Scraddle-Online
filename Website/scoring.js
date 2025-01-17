import board from "./generateBoard.js"
import {boardWidth, boardHeight} from "./generateBoard.js";

function Check(event){
	//board.PrintBoard();
	getScore();
}

function getScore(){
	getWords(getRows(),boardHeight);
	getWords(getColumns(),boardWidth);
}

function getWords(sentence, length){ //join arrays then split at " "
	
}

function getRows(){	
	const rows = Array(boardHeight).fill(null);
	for(let i = 0; i < boardHeight; i++){
		rows[i] = board.boardArray[i];
	}
}

function getColumns(){
	const columns = Array(boardWidth).fill(null);
	for(let i = 0; i < boardWidth; i++){
		let column = Array(boardHeight);
		for(let j = 0; j < boardHeight; j++){
			column[j] = board.boardArray[j][i];
		}
		columns[i] = column;
	}
}

const button = document.getElementById("submit");
button.addEventListener('click', Check);