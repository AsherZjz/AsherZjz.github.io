function showPic(whichpic){
	var source=whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);

	var text=whichpic.getAttribute("title");
	var placeholder = document.getElementById("description");
	description.firstChild.nodeValue=text;
}