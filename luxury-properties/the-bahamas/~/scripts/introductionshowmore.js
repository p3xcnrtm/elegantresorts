
$(document).ready(function () {

    //This linked to from introduction.ascx
    //The reason it is in a separate file is that using defer on jquery load breaks the control if it is in the usercontrol or parent page.

    $(".readMore").hide();
    $("#divShowMore").on("click", function () {

        var txt = $(".readMore").is(':visible') ? 'Read More' : 'Read Less';
        $("#divShowMore").text(txt);
        $('.readMore').slideToggle(800);
    });


});


