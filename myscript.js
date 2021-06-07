
function Fun1() {
	var b = document.getElementById("burg");
	var c = document.getElementById("closer");
	b.style.display = "inline";
	c.style.display = "none";

}

function dropnav() {

	var swi = document.getElementById("lister"); 
	swi.classList.toggle("showing");


	var b = document.getElementById("burg");
	var c = document.getElementById("closer");
	if (c.style.display == "none") {
	b.style.display = "none";
	c.style.display = "inline";
	} else {
	b.style.display = "inline";
	c.style.display = "none";
	}


}

