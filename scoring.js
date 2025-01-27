import board from "./generateBoard.js"
import {boardWidth, boardHeight} from "./generateBoard.js";


function Score(){
	const words = (getWords(getRows(),boardHeight)).concat(getWords(getColumns(),boardWidth));
	const serverInput = document.getElementById("words");
	serverInput.value = "";
	let totalValue = 0;
	for(let i = 0; i < words.length; i++){
		let word = "";
		for(let j = 0; j < words[i].wordLength; j++){
			word += words[i].word[j].letter;
			totalValue += words[i].word[j].value;
		}
		serverInput.value += word;
		if(i != words.length-1) {serverInput.value += ","};
	}
	SubmitToServer(totalValue);
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
				console.log(newWord);
				newWords.push(newWord);
				currentWord = [];
			}
		}
		if(sentence[length-1] != null && sentence[length-2] != null){
			currentWord.push(sentence[length-1]);
			letterCount++;
			newWord = {word: currentWord, wordLength: letterCount};
			newWords.push(newWord);
			currentWord = [];
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

function SubmitToServer(totalValue){
	const form = document.getElementById('submitBoard');
	form.addEventListener('submit', (event) => {
	  event.preventDefault(); // Prevents the default form submission behavior
  
	  // Perform any form validation or data manipulation here
  
	  const formData = new FormData(form); // Create a FormData object with the form data
	  fetch("http://localhost/serverSide/checkWord.php", {
		method: 'POST',
		body: formData
	  })
	  .then(response => {
		if (response.ok) {
		  response.text().then(function (text){
			//https://stackoverflow.com/questions/41946457/getting-text-from-fetch-response-object 27/01/2025 11:01
			if(text == "realWord"){
			  document.getElementById("totalScore").innerHTML = "Score: " + totalValue;
			  console.log("hooray");
			}
			else{
				document.getElementById("totalScore").innerHTML = "Score: Invalid"
			  console.log("nooray");
			}
		  });
		}
		else {
		  console.log("error")
		  // Handle the error
		}
	  })
	  .catch(error => {
		console.log(error);
		// Handle the error
	  });
	});
	//https://html.form.guide/php-form/submit-form-without-reloading-page-php/ 09:21 24/01/2025
  }