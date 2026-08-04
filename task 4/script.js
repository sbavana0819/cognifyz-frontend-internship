function changeColor(){
    var colors = [
        "lightpurple",
        "lightsalmon",
        "lightgreen",
        "lightpink",
        "lavender",
        "cyan",
        "lightbrown"
    ];

    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}