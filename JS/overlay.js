 // Hide the overlay and spinner when the page has finished loading
 window.onload = function() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    
    // Enable scrolling
    document.body.style.overflow = "auto";
};