// $(".pokeball").click(function () {
//     $(".pokeball").toggleClass("pokeball-grow");
// });


$(".pokeball").mouseenter(function () {
    $(".pokeball").addClass("pokeball-grow").delay(500);
});

$(".pokeball").mouseleave(function () {
    $(".pokeball").removeClass("pokeball-grow");
});


$(document).click(function () {
    $(".pokeball").toggleClass("pokeball-animate");
})
