import Tile from "/modules/tile.js";

class Hand{
	constructor(handSize){
		this.handSize = handSize;
		this.handArray = Array.apply(null, Array(handSize));
		//https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size 11/01/2025 19:41
		this.tilesInHand = 0;
	}
	
	AddToHand(tile){
		this.handArray[this.tilesInHand] = tile;
		this.tilesInHand++;
	}
	
	RemoveFromHand(tile){
		console.log(this.handArray.indexOf(tile));
		this.handArray.splice(this.handArray.indexOf(tile),1);
		this.tilesInHand--;
	}
}

export default Hand;