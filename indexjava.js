document.addEventListener("scroll"), function(){
    var header = document.querySelector(".sticky-header");
}
if (window.scrollY > 50) {
    header.style.backgroundColor = "black"; // Change background color on scroll
} else {
    header.style.backgroundColor = "white"; // Default background color
}
