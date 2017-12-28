(function () {
    "use strict";

    var red = "red";
    var yellow = "yellow";
    var green = "green";
    var blue = "blue";

    var clickColor = {
        colorClicker: function (color) {
            console.log(color);
        }
    };

    $("#red-box").click(function() {
        clickColor.colorClicker(yellow)});
    $("#yellow-box").click(function() {
        clickColor.colorClicker(yellow)});
    $("#green-box").click(function() {
        clickColor.colorClicker(green)});
    $("#blue-box").click(function() {
        clickColor.colorClicker(blue)});


})();