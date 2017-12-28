(function () {
    "use strict";
    $(document).ready(function () {


    var colors = [$("#red-box"), $("#yellow-box"), $("#green-box"), $("#blue-box")];

    var gameArray = [];

    $("#start").click(randomNumber);

    function randomNumber() {
        var randomColor = Math.floor(Math.random() * (4));
        gameArray.push(randomColor);
        lightUp();
    }


    //set interval

    function lightUp() {
        console.log(gameArray);
        var count = 0;
        var max = gameArray.length;
        var interval = 1000;
        var intervalID = setInterval(function () {
            if (count === max) {
                clearInterval(intervalID);
            } else {
                console.log(colors[gameArray[count]]);
                colors[gameArray[count]].addClass("light");
                setTimeout(function () {
                    $(".box").removeClass("light");
                }, 1000);
                colors[gameArray[count]]
                    .animate({
                        opacity: 1,
                    }, 500)
                    .animate({
                        opacity: .35,
                    }, 500);
                count++;
            }
        interval});
    }

    // console.log($(this).attr("data"))
    //this console.log is giving the data value from the html of each colored box

    // var red = "red";
    // var yellow = "yellow";
    // var green = "green";
    // var blue = "blue";
    //
    // var clickColor = {
    //     colorClicker: function (color) {
    //         console.log(color);
    //     }
    // };


    // $("#yellow-box").click(function() {
    //     clickColor.colorClicker(yellow)});
    // $("#green-box").click(function() {
    //     clickColor.colorClicker(green)});
    // $("#blue-box").click(function() {
    //     clickColor.colorClicker(blue)});
    });

})();