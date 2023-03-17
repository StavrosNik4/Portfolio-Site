var navbar = document.getElementById("navbar");
var navbarHeight = navbar.offsetHeight;
var scrollPosition = window.pageYOffset;

window.addEventListener("scroll", function() {
    var newScrollPosition = window.pageYOffset;
    if (newScrollPosition > scrollPosition) {
        // Scrolling down
        if (newScrollPosition >= navbarHeight) {
            navbar.classList.add("scrolled");
        }
    } else {
        // Scrolling up
        navbar.classList.remove("scrolled");
    }
    scrollPosition = newScrollPosition;
});

var myButton = document.getElementsByClassName("nav-item");

myButton.addEventListener("click", function() {
    if (myButton.classList.contains("active")) {
        myButton.classList.remove("active");
        myButton.classList.add("inactive");
    } else {
        myButton.classList.remove("inactive");
        myButton.classList.add("active");
    }
});