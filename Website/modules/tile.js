class Tile{
	constructor(letter, value){
		this.letter = letter;
		this.value = value;
	}
	
	DrawTile(ID, cell, tile){
		const newTile = document.createElement("div");
		newTile.setAttribute("id", ID);
		newTile.setAttribute("class", "tile");
		newTile.setAttribute("draggable", "true");
		newTile.innerHTML = tile.letter;
		cell.appendChild(newTile);
		
		const newTileValue = document.createElement("p");
		newTileValue.setAttribute("id", "tileValue");
		newTileValue.innerHTML = tile.value;
		newTile.appendChild(newTileValue);
		
		cell.id = cell.id.slice(0,-1) + "F";
	}
}

export default Tile;