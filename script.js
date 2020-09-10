var hamburger = document.getElementById("hamburger");
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menumobile")
var header = document.getElementsByClassName("header")[0];
var menumobile = document.getElementById("menumobile");

hamburger.addEventListener("click", function(){
	header.classList.toggle("active");
	hamburger.classList.toggle("fa-times");
	hamburger.classList.toggle("fa-bars");
});

menumobile.addEventListener("click", function() {
	header.classList.remove("active");
	hamburger.classList.toggle("fa-times");
	hamburger.classList.toggle("fa-bars");
});

