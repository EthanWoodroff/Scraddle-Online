class Tile{
	constructor(letter, value){
		this.letter = letter;
		this.value = value;
		this.type = "BB";
	}
	
	DrawTile(ID, cell, tile){
		const newTile = document.createElement("div");
		newTile.setAttribute("id", ID);
		newTile.setAttribute("class", "tile");
		newTile.setAttribute("draggable", "true");
		cell.appendChild(newTile);
		
		const newTileLetter = document.createElement("div");
		newTileLetter.setAttribute("id", "tileLetter");
		newTileLetter.innerHTML = tile.letter;
		newTile.appendChild(newTileLetter);
		
		const newTileValue = document.createElement("div");
		newTileValue.setAttribute("id", "tileValue");
		newTileValue.innerHTML = tile.value;
		newTile.appendChild(newTileValue);
		
		cell.id = cell.id.slice(0,-1) + "F";
	}
}

export default Tile;