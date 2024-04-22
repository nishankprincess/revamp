document.addEventListener('DOMContentLoaded', function() {
    var aboutUsButton = document.getElementById('about-us-button');
    var recycleCenterButton = document.getElementById('recycle-center-button');
    var interactiveContentButton = document.getElementById('interactive-content-button');
    var latestNewsButton = document.getElementById('latest-news-button');
    var contactUsButton = document.getElementById('contact-us-button');

    aboutUsButton.addEventListener('click', showAboutUs);
    recycleCenterButton.addEventListener('click', showRecycleCenter);
    interactiveContentButton.addEventListener('click', showInteractiveContent);
    latestNewsButton.addEventListener('click', showLatestNews);
    contactUsButton.addEventListener('click', showContactForm);
});

function showAboutUs() {
    hideAllWebParts();
    document.getElementById('main-content').style.display = 'block';
}

function showRecycleCenter() {
    hideAllWebParts();
    hideAboutUs();
    document.getElementById('recycle-center').style.display = 'block';
}

function showInteractiveContent() {
    hideAllWebParts();
    hideAboutUs();
    document.getElementById('interactive-content').style.display = 'block';
}

function showLatestNews() {
    hideAllWebParts();
    hideAboutUs();
    document.getElementById('latest-news').style.display = 'block';
}

function showContactForm() {
    hideAllWebParts();
    hideAboutUs();
    document.getElementById('contact-form').style.display = 'block';
}

function hideAboutUs() {
    document.getElementById('main-content').style.display = 'none';
}

function hideAllWebParts() {
    var webParts = document.getElementsByClassName('web-part');
    for (var i = 0; i < webParts.length; i++) {
        webParts[i].style.display = 'none';
    }
}
