import Tile from "/classes/tile.js";

class Hand{
	constructor(handSize){
		this.handSize = handSize;
		this.hand = Array.apply(null, Array(handSize));
		//https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size 11/01/2025 19:41
		this.tilesInHand = 0;
	}
	
	AddToHand(tile){
		this.hand[this.tilesInHand] = tile;
		this.tilesInHand++;
	}
	
	RemoveFromHand(tile){
		this.hand[this.hand.indexOf(tile)] = null;
		this.tilesInHand--;
	}
}

export default Hand;