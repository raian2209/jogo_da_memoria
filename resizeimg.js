// Create a new image element
var img = new Image();

// Set the image source (replace with your actual image URL)
img.src = "./background/space.jpeg";

// Resize the image when it's loaded
img.onload = function() {
    // Set the new dimensions (e.g., 200x100)
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;

    // Draw the resized image on a canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = newWidth;
    canvas.height = newHeight;
    ctx.drawImage(img, 0, 0, newWidth, newHeight);

    // Get the resized image data (as a base64-encoded URL)
    var resizedImageURL = canvas.toDataURL("./background/space.jpeg");

    // Now you can use the resizedImageURL as needed
    // (e.g., set it as the source for an <img> tag)
};
