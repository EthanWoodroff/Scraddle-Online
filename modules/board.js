import Grid from "/modules/grid.js";

class Board extends Grid{
	constructor(boardWidth, boardHeight, specialMap){
		super();
		this.gridWidth = boardWidth;
		this.gridHeight = boardHeight;
		this.gridArray = this.CreateArray(this.gridWidth,this.gridHeight);
		this.specialMap = specialMap;
	}
	AddTile(tile, tileY, tileX){
		const tileXString = String(tileX).padStart(2, 0); const tileYString = String(tileY).padStart(2, 0);
		console.log(tile);
		for(let i = 0; i < this.specialMap.length; i++){
			for(let j = 0; j < this.specialMap[i].coordinates.length; j++){
				if(this.specialMap[i].coordinates[j]==(tileXString+tileYString)){
					tile.type = this.specialMap[i].type;
				}
			}
		}
		this.gridArray[tileX][tileY] = tile;
		this.PrintGrid(this.gridArray);
	}
}

export default Board;