function changeColor(){
    var colors = [
        "#FFDAB9", 
        "#90EE90", 
        "#FFB6C1", 
        "#AFEEEE", 
        "#D8BFD8", 
        "#F0E68C", 
        "#ADD8E6", 
        "#FFFACD", 
        "#DDA0DD", 
        "#98FB98", 
        "#FFE4E1", 
        "#B0E0E6", 
        "#FFD1DC", 
        "#E0FFFF"
    ];

    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}