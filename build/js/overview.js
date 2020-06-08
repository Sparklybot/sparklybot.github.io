document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = $("#mobile-menu");
    const content = $("#content");

    const firebaseConfig = {
        apiKey: "AIzaSyDTOU0Wdco22U6oLwx7Zx0hheIhEDDnAEk",
        authDomain: "sparkly-bot.firebaseapp.com",
        projectId: "sparkly-bot",
        appId: "1:823194089324:web:d090342ef724ccf704e549"
    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            let signInMobile = $('#sign-in-link-mobile');
            let signIn = $('#sign-in-link');
            signInMobile.attr('href','https://sparklybot.com/account');
            signIn.attr('href','https://sparklybot.com/account');
            signInMobile.text('My Dashboard');
            signIn.text('My Dashboard');
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
