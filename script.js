var css = document.querySelector("h3");
var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var body = document.querySelector("body");

var textCss = getComputedStyle(body).background;
textCss = textCss.substring(17, 75) + ";";

css.textContent = textCss; // Initial values

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



