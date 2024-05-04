function freemoney() {
    window.open("https://www.youtube.com/@Zanderiel")
}
function unhidesecret() {
    document.getElementById("blackmarketdiv").style = "display: block;"
    document.getElementById("normalcontent").style = "display: none;"
}
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function saulgood() {
    var goodermen = document.createElement("img");
    goodermen.src = "saulgoodman.JPG";
    goodermen.style.position = "absolute";
    var randomTop = Math.floor(Math.random() * (window.innerHeight - 100)) + "px";
    var randomLeft = Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
    goodermen.style.top = randomTop;
    goodermen.style.left = randomLeft;
    goodermen.onclick = function() {
        document.getElementById("saulgoodmanimg").click();
    };
    document.body.append(goodermen);
}
function saulgoodmanify() {
    intervalid = setInterval(saulgood, 1);
}
