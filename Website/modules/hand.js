import Tile from "/modules/tile.js";

class Hand{
	constructor(handSize){
		this.handSize = handSize;
		this.handArray = Array(handSize).fill(null);
		//https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size 11/01/2025 19:41
		this.tilesInHand = 0;
	}
	
	AddToHand(tile, position){
		this.handArray[position] = tile;
		this.tilesInHand++;
		//this.PrintHand(this.handArray);
	}
	
	RemoveFromHand(position){
		this.handArray[position] = null;
		this.tilesInHand--;
		//this.PrintHand(this.handArray);
	}
	
	PrintHand(){
		let printedHand = "";
		for(let i = 0; i < this.handSize; i++){
			if(this.handArray[i] != null) printedHand+=this.handArray[i].letter + ",";
			else printedHand+="#,";
		}
		console.log(printedHand);
	}
}

export default Hand;