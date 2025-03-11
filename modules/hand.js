import Grid from "/modules/grid.js";

class Hand extends Grid{
	constructor(handWidth, handHeight){
		super();
		this.gridWidth = handWidth;
		this.gridHeight = handHeight;
		this.gridArray = this.CreateArray(this.gridWidth,this.gridHeight);
	}
}

export default Hand;