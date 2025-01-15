import Tile from "/modules/tile.js";

class Board{
	constructor(boardWidth, boardHeight){
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		this.boardArray = this.CreateArray(this.boardWidth,this.boardHeight);
	}
	
	AddTile(tile, tileX, tileY){
		console.log("Add to board");
		this.boardArray[tileX][tileY] = tile;
		for(let i = 0; i < this.boardHeight; i++){
			for(let j = 0; j < this.boardWidth; j++){
				console.log(this.boardArray[j][i]);
			}
		}
	}

	Delete(tileX, tileY){
		console.log("Remove from board");
		this.boardArray[tileX][tileY] = null;
		for(let i = 0; i < tileX+1; i++){
			for(let j = 0; j < tileY+1; j++){
				console.log(this.boardArray[i][j]);
			}
		}
	}
	
	CreateArray(width,height){
		const newArray = new Array(height);
		for(let i = 0; i < height; i++){
			newArray[i] = Array.apply(null, Array(height));
		}
		return newArray;
	}
}

export default Board;