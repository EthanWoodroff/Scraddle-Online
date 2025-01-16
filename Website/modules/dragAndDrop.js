export function allowDrop(ev) {
  ev.preventDefault();
}

export function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

export function drop(ev) {
	if(!(ev.target.className == "cell" && ev.target.id[5] == "E")) {return};
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
	
}
//https://www.w3schools.com/html/html5_draganddrop.asp 11/01/2025 12:56
