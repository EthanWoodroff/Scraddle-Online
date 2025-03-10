import Grid from "/modules/grid.js";

class Hand extends Grid{
	constructor(handSize){
		super();
		this.gridWidth = handSize;
		this.gridHeight = 1;
		this.gridArray = this.CreateArray(this.gridWidth,this.gridHeight);
	}
}

export default Hand;