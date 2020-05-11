$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash;
            });
        }
    });

    //for tooltips
    $('[data-toggle="tooltip"]').tooltip();

    showSideNav();
});

function showSideNav() {
    var sideNav = $('#sideNav'), view = $(window), timeoutKey = -1;
    sideNav.fadeOut();
    $(document).on('scroll', function () {
        if (timeoutKey) {
            window.clearTimeout(timeoutKey);
        }
        timeoutKey = window.setTimeout(function () {
            if (view.scrollTop() < 300) {
                sideNav.fadeOut();
            }
            else {
                sideNav.fadeIn();
            }
        }, 100);
    });
}