import Tile from "/classes/tile.js";

class Hand{
	constructor(handSize){
		this.handSize = handSize;
		this.hand = Array.apply(null, Array(handSize));
		this.tilesInHand = 0;
		//https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size 14/01/2025 22:08
	}
	
	AddToHand(tile){
		this.hand[this.tilesInHand] = tile;
		this.tilesInHand++;
	}
}

export default Hand;