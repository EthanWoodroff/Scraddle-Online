class Grid{
	constructor(gridWidth, gridHeight){
		this.gridWidth = gridWidth;
		this.gridHeight = gridHeight;
		this.gridArray = this.CreateArray(this.gridWidth,this.gridHeight);
	}
	
	AddTile(tile, tileY, tileX){
		this.gridArray[tileX][tileY] = tile;
		//this.PrintGrid(this.gridArray);
	}

	Delete(tileY, tileX){
		this.gridArray[tileX][tileY] = null;
		//this.PrintGrid(this.gridArray);
	}
	
	CreateArray(width,height){
		//https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size 11/01/2025 19:41
		const newArray = new Array(height);
		for(let i = 0; i < height; i++){
			newArray[i] = Array(width).fill(null);
		}
		return newArray;
	}
	
	PrintGrid(){
		let printedGrid = "";
		for(let i = 0; i < this.gridHeight; i++){
			for(let j = 0; j < this.gridWidth; j++){
				if(this.gridArray[i][j] != null) printedGrid+=this.gridArray[i][j].letter + ",";
				else printedGrid+="#,";
			}
			printedGrid+="\n";
		}
		console.log(printedGrid);
	}
}

export default Grid;