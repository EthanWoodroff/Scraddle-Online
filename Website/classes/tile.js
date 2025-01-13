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
		newTile.setAttribute("ondragstart", "drag(event)");
		newTile.innerHTML = tile.letter;
		
		cell.appendChild(newTile);
		const newTileValue = document.createElement("p");
		newTileValue.setAttribute("id", "tileValue");
		newTileValue.innerHTML = tile.value;
		newTile.appendChild(newTileValue);
	}
}

export default Tile;