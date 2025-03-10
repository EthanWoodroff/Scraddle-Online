import Grid from "/modules/grid.js";

class Board extends Grid{
	constructor(boardWidth, boardHeight){
		super();
		this.gridWidth = boardWidth;
		this.gridHeight = boardHeight;
		this.gridArray = this.CreateArray(this.gridWidth,this.gridHeight);
	}
}

export default Board;