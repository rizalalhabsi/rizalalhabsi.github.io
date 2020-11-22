//const WAIT = document.querySelector('.wait');
const topButton = document.getElementById("top");


$(document).ready(function () {
    $('.preloader').css("display", "none");
});

$(document).ready(function () {
    setTimeout(function () {
        $('.tagline').addClass('muncul');
        $('.quote').addClass('muncul');
    }, 50)

    setTimeout(function () {
        $('.supported').addClass('muncul');
    }, 500);

});

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// $(document).ready(function () {

//     var counter = 0;
//     var a = setInterval(function () {

//         counter++;

//         if (counter % 2 == 0) {
//             WAIT.classList.toggle('muncul');
//         }
//     }, 700)

// });
