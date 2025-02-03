// script.js
$(document).ready(function() {
    // Enhanced Intro Screen
    let introTimeout = setTimeout(() => {
        $('#intro-screen').fadeOut(500);
    }, 3000);

    $('#intro-screen').click(() => {
        clearTimeout(introTimeout);
        $('#intro-screen').fadeOut(500);
    });

    // Responsive Design Enhancements
    function adjustLayout() {
        if ($(window).width() < 768) {
            $('.chat-container').height($(window).height() * 0.6);
        }
    }
    $(window).resize(adjustLayout);
    adjustLayout();
});