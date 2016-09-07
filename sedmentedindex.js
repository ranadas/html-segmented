//$('.nav').click(function () {
//    var id = $(this).attr('id');
//    $("#messageitem").html("clicked " + id);
//    console.log("clicked " + id);
//    //$('html, body').animate({
//    //    scrollTop: ($('#' + id + '.section').offset().top)
//    //}, 10);
//});

$(document).ready(function () {
    console.log("document ready!");
    $("#div1").hide();
    $("#div2").hide();
    $("#div3").hide();
    $("#div4").hide();


    $('.nav').click(function () {
        var id = $(this).attr('id');
        $("#messageitem").html("clicked by " + id);
        $("#headeritem").html("SECTION:" + id);
        console.log("clicked " + id);
        switch (parseInt(id)) {
            case 1:
                $("#div1").show();
                $("#div2").hide();
                $("#div3").hide();
                $("#div4").hide();
                break;
            case 2:
                $("#div1").hide();
                $("#div2").show();
                $("#div3").hide();
                $("#div4").hide();
                break;
            case 3:
                $("#div1").hide();
                $("#div2").hide();
                $("#div3").show();
                $("#div4").hide();
                break;
        }
    });

    $('#b4').click(function(e) {
        console.log("clicked " + this);
        $("#messageitem").html("clicked by " + this.id);
        $("#headeritem").html("SECTION:" + this.id);
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").show();
    });
});