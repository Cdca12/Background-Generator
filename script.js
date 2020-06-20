var css = document.querySelector("h3");
var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var body = document.querySelector("body");
var randomButton = document.getElementById("random");

var leftValue, rightValue;

randomizeColors();

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function generateRandomColors() {
    leftValue = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    };
    rightValue = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    };    
}

function rgbToHex(rgb) {
    return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
  }

function randomizeColors() {
    generateRandomColors();
    body.style.background =
        "linear-gradient(to right, rgb("
        + leftValue.r + ", " + leftValue.g + ", " + leftValue.b
        + "), rgb("
        + rightValue.r + ", " + rightValue.g + ", " + rightValue.b
        + ")";
    css.textContent = body.style.background + ";";

    // Change inputs
    color1.value = rgbToHex(leftValue);
    color2.value = rgbToHex(rightValue);
}

randomButton.addEventListener("click", randomizeColors);

 // Show initial values
css.textContent = body.style.background + ";";


