class Tile{
	constructor(letter, value){
		this.letter = letter;
		this.value = value;
	}
	
	GetLetter(){
		return this.letter;
	}
	GetValue(){
		return this.value;
	}
}

export default Tile;