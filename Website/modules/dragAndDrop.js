export function allowDrop(ev) {
  ev.preventDefault();

  ev.stopPropagation();
  //https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation 19:54 20/01/2025
}

export function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

export function drop(ev) {
	if(!(ev.target.className == "cell" && ev.target.id[5] == "E")) {return};
	
	ev.stopPropagation();
    //https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation 19:54 20/01/2025
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}
//https://www.w3schools.com/html/html5_draganddrop.asp 11/01/2025 12:56
