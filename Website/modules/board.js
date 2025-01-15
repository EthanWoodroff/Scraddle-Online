import Tile from "/modules/tile.js";

class Board{
	constructor(boardWidth, boardHeight){
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		this.boardArray = new Array(boardWidth,boardHeight);
	}
	
	AddTile(tile, tileX, tileY){
		this.boardArray[tileX,tileY] = tile;
	}
}

export default Board;