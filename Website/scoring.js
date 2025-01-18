import board from "./generateBoard.js"
import {boardWidth, boardHeight} from "./generateBoard.js";



function Score(event){
	const totalScore = document.getElementById("totalScore");
	const scores = document.getElementById("scores");
	const words = (getWords(getRows(),boardHeight)).concat(getWords(getColumns(),boardWidth));
	let totalValue = 0;
	for(let i = 0; i < words.length; i++){
		let word = "";
		let wordValue = 0;
		for(let j = 0; j < words[i].wordLength; j++){
			word += words[i].word[j].letter;
			wordValue += words[i].word[j].value;
		}
		totalValue += wordValue;
		scores.innerHTML += ("<br>" + word + ": " + wordValue);
	}
	totalScore.innerHTML = "Score: " + totalValue;
}

function getWords(sentences, length){
	const newWords = Array();
	for(let i = 0; i < boardHeight; i++){
		let sentence = sentences[i];
		let currentWord = [];
		let letterCount = 0;
		let newWord = {};
		for(let j = 0; j < length-1; j++){
			if((sentence[j] != null && sentence[j+1] != null)||(j>0 && sentence[j] != null && sentence[j-1] != null)){
				currentWord.push(sentence[j]);
				letterCount++;
			}
			if (sentence[j+1] == null && currentWord[0] != undefined){
				newWord = {word: currentWord, wordLength: letterCount};
				newWords.push(newWord);
			}
		}
		if(sentence[length-1] != null && sentence[length-2] != null){
			currentWord.push(sentence[length-1]);
			letterCount++;
			newWord = {word: currentWord, wordLength: letterCount};
			newWords.push(newWord);
		}
	}
	return newWords;
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
button.addEventListener('click', Score);