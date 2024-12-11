$(".readmore_btn").on("click", function(){
    $(this).parent().toggleClass("showContent");

    var replaceText = $(this).parent().hasClass("showContent") ? "ver menos" : "ver más";
    $(this).text(replaceText);

});

function toggleMobileMenu(menu) {
    menu.classList.toggle(open);
}