import Tile from "/modules/tile.js";

class Board{
	constructor(boardWidth, boardHeight){
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		this.boardArray = this.CreateArray(this.boardWidth,this.boardHeight);
	}
	
	AddTile(tile, tileX, tileY){
		this.boardArray[tileX][tileY] = tile;
		//this.PrintBoard(this.boardArray);
	}

	Delete(tileX, tileY){
		this.boardArray[tileX][tileY] = null;
		//this.PrintBoard(this.boardArray);
	}
	
	CreateArray(width,height){
		const newArray = new Array(height);
		for(let i = 0; i < height; i++){
			newArray[i] = Array(width).fill(null);
		}
		return newArray;
	}
	
	PrintBoard(){
		let printedBoard = "";
		for(let i = 0; i < this.boardHeight; i++){
			for(let j = 0; j < this.boardWidth; j++){
				if(this.boardArray[j][i] != null) printedBoard+=this.boardArray[j][i].letter + ",";
				else printedBoard+="#,";
			}
			printedBoard+="\n";
		}
		console.log(printedBoard);
	}
}

export default Board;