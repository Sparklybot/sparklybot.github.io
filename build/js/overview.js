document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = $("#mobile-menu");
    const content = $("#content");

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            $('#sign-in-link-mobile').attr('href','https://sparklybot.com/account');
            $('#sign-in-link').attr('href','https://sparklybot.com/account');
            $('#sign-in-link-mobile').text('My Dashboard');
            $('#sign-in-link').text('My Dashboard');
        }
    });

    $('#mobile-menu-button').click(() => {
        if(mobileMenu.hasClass("hidden")) {
            mobileMenu.removeClass("hidden");
            content.addClass("hidden");

            $('html, body').css({
                overflow: 'hidden',
                height: '100%'
            });
        } else {
            mobileMenu.addClass("hidden");
            content.removeClass("hidden");

            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
        }
    });

    $('a.mobile-menu-link').click(() => {
        mobileMenu.addClass("hidden");
        content.removeClass("hidden");

        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    });
});
