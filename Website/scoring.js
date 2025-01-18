import board from "./generateBoard.js"
import {boardWidth, boardHeight} from "./generateBoard.js";

function Check(event){
	//board.PrintBoard();
	getScore();
}

function getScore(){
	console.log(getWords(getRows(),boardHeight));
	console.log(getWords(getColumns(),boardWidth));
}

function getWords(sentences, length){
	const words = Array();
	for(let i = 0; i < boardHeight; i++){
		let sentence = sentences[i];
		let currentWord = [];
		let letterCount = 0;
		let word = {};
		for(let j = 0; j < length-1; j++){
			if((sentence[j] != null && sentence[j+1] != null)||(j>0 && sentence[j] != null && sentence[j-1] != null)){
				currentWord.push(sentence[j]);
				letterCount++;
			}
			if (sentence[j+1] == null && currentWord[0] != undefined){
				word = {currentWord, letterCount};
				words.push(word);
			}
		}
		if(sentence[length-1] != null && sentence[length-2] != null){
			currentWord.push(sentence[length-1]);
			letterCount++;
			word = {currentWord, letterCount};
			words.push(word);
		}
	}
	return words;
}

function getRows(){	
	const rows = Array(boardHeight).fill(null);
	for(let i = 0; i < boardHeight; i++){
		rows[i] = board.boardArray[i];
	}
	return rows;
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
	return columns;
}

const button = document.getElementById("submit");
button.addEventListener('click', Check);