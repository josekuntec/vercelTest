$(document).ready(function () {

    $("#columna1").click(function () {
        $("p").hide();
    });

    $("#fadeBtn").mouseleave(function () {
        $("#TamaImg").fadeOut(5000);
        $("#TamaImg").attr({ "src": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Super_Stationmaster_Tama_20090104.JPG" });
        $("#TamaImg").fadeIn(5000);

    });

});