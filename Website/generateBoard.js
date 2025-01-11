import TileBag from "./tileBag.js";

//function to build a grid for the board and hand
function BuildGrid(gridName, height, width){
	let grid = document.getElementById(gridName);
	for (let i = 0; i < height; i++){
		let row = document.createElement("div");
		row.setAttribute("id", "row");
		grid.appendChild(row);
		
		for (let j = 0; j < width; j++) {
			let cell = document.createElement("div");
			cell.setAttribute("id", "cell");
			row.appendChild(cell);
		}
	}
}

//generation of the board
BuildGrid("board",3,3);

//generation of the hand
BuildGrid("hand",1,5);

const bag = new TileBag();
const tiles = bag.GetBag();
let stringg = "";
for(let i = 0; i < 100; i++){
	stringg += tiles[i].GetLetter();
	stringg += tiles[i].GetValue();
}

document.getElementById("debug").innerHTML = stringg;
