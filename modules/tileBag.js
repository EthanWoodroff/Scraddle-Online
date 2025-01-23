import Tile from "/modules/tile.js";

class TileBag{
	constructor(){
		this.size = 100;
		this.topPointer = 0;
		this.tiles = this.Shuffle(this.size, this.CreateTiles());
	}
	
	CreateTiles(){
		const tileArray = Array.apply(null, Array(100));
		//https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size 11/01/2025 16:16
		const letterArray =   ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","?"];
		const valueArray =    [ 1 , 3 , 3 , 2 , 1 , 4 , 2 , 4 , 1 , 8 , 5 , 1 , 3 , 1 , 1 , 3 , 10, 1 , 1 , 1 , 1 , 4 , 4 , 8 , 4 , 10, 0 ];
		const quantityArray = [ 9 , 2 , 2 , 4 , 12, 2 , 3 , 2 , 9 , 1 , 1 , 4 , 2 , 6 , 8 , 2 , 1 , 6 , 4 , 6 , 4 , 2 , 2 , 1 , 2 , 1 , 2 ];
		
		let count = 0;
		for(let i = 0; i < 27; i++){
			for(let j = 0; j < quantityArray[i]; j++){
				tileArray[count] = new Tile(letterArray[i], valueArray[i]);
				count++;
			}
		}
		return tileArray;
	}
	
	//I have used the Fisher-Yates shuffle
	Shuffle(size, tiles){
		//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle 21:02 11/01/2025
		for(let i = size-1; i > 1; i--){
			const randomPosition = Math.floor(Math.random() * (i+1));
			const placeholder = tiles[randomPosition];
			tiles[randomPosition] = tiles[i];
			tiles[i] = placeholder;
		}
		return tiles;
	}
	
	TakeTile(){
		const tilePosition = this.topPointer;
		this.size--;
		this.topPointer++;
		return this.tiles[tilePosition];
	}
}

export default TileBag;