const element = document.getElementById("ele1");

function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

element.addEventListener("click", function() {
    pintar(element, 'yellow');
});
