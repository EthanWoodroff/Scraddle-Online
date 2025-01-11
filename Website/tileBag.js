import Tile from "./tile.js";

class TileBag{
	const tileArray = Array.apply(null, Array(100));
	//https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size 11/01/2025 16:16
	const letterArray =   ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];
	const valueArray =    [ 1 , 3 , 3 , 2 , 1 , 4 , 2 , 4 , 1 , 8 , 5 , 1 , 3 , 1 , 1 , 3 , 10, 1 , 1 , 1 , 1 , 4 , 4 , 8 , 4 , 10, 0 ];
	const quantityArray = [ 9 , 2 , 2 , 4 , 12, 2 , 3 , 2 , 9 , 1 , 1 , 4 , 2 , 6 , 8 , 2 , 1 , 6 , 4 , 6 , 4 , 2 , 2 , 1 , 2 , 1 , 2 ];
	constructor(){
		for(let i = 0; i < 27; i++){
			for(let j = 0; j < quantityArray[i]; j++){
				tileArray[i] = new tile(letterArray[i], valueArray[i]);
			}
		}
	}
	
	GetBag(){
		return tileArray;
	}
}

export default TileBag;