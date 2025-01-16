import Tile from "/modules/tile.js";

class Board{
	constructor(boardWidth, boardHeight){
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		this.boardArray = this.CreateArray(this.boardWidth,this.boardHeight);
	}
	
	AddTile(tile, tileX, tileY){
		this.boardArray[tileX][tileY] = tile;
		/*
		console.log("Add to board");
		for(let i = 0; i < this.boardHeight; i++){
			for(let j = 0; j < this.boardWidth; j++){
				console.log(this.boardArray[j][i]);
			}
		}
		*/
	}

	Delete(tileX, tileY){
		this.boardArray[tileX][tileY] = null;
		/*
		console.log("Remove from board");
		for(let i = 0; i < tileX+1; i++){
			for(let j = 0; j < tileY+1; j++){
				console.log(this.boardArray[i][j]);
			}
		}
		*/
	}
	
	CreateArray(width,height){
		const newArray = new Array(height);
		for(let i = 0; i < height; i++){
			newArray[i] = Array(width).fill(null);
			console.log(newArray[i][0]);
		}
		return newArray;
	}
}

export default Board;