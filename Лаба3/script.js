$(document).ready(function(){
    $("nav").on("click","#anchor", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    let items = document.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++){
       if (i % 2 == 0)
        items[i].style.backgroundColor = "green"; 
    }
 });