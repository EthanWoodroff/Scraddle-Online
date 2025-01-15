import Tile from "/classes/tile.js";

class Board{
	constructor(boardWidth, boardHeight){
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		this.board = new Array(boardWidth,boardHeight);
	}
}

export default Board;