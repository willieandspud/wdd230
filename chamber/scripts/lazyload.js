document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll(".lazy");

    lazyloadImages.forEach(function(img) {
        img.addEventListener("load", function() {
            // Optional: Do something when image is loaded
            console.log("Image loaded");
        });

        img.addEventListener("error", function() {
            // Optional: Handle error loading image
            console.log("Error loading image");
        });

        img.src = img.dataset.src;
    });
});
