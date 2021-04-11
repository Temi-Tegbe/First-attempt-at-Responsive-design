function myFunction() {
    var x = document.getElementById("my-nav-bar");
    if (x.className === "div.nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "div.navbar";
    }
}