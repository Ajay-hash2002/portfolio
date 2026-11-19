// list of colors
var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "lightblue", "gray"];

var button = document.getElementById("changeBtn");
var colorName = document.getElementById("colorName");

button.addEventListener("click", function () {
    // pick a random color from the array
    var index = Math.floor(Math.random() * colors.length);
    var newColor = colors[index];

    document.body.style.backgroundColor = newColor;
    colorName.textContent = newColor;
});
